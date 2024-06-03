import parser from "luaparse";
import { readFileSync } from "fs";
import path from "path";
import { notNullOrUndefined } from "../utils/arrayUtils";

const luaFilePath = path.resolve(__dirname, "../examples/TraitData_Chaos.lua");
const luaFile = readFileSync(luaFilePath, "utf8");
const exampleAst = parser.parse(luaFile);

// console.log(JSON.stringify(exampleAst, null, 2));

const chunk = exampleAst;
const firstBody = chunk.body[0] as any;
const chaosBlessing = firstBody.init[0].fields.find(
  (field: any) => field.key.name === "ChaosBlessing"
);
const rarities = chaosBlessing.value.fields.find(
  (field: any) => field.key.name === "RarityLevels"
);

type Node = {
  type: string;
  key: {
    type: string;
    name: string;
  };
  value: {
    type: string;
    fields?: Node[];
    value?: number;
    raw?: string;
  };
};

const convertToJson2 = (node: Node): any => {
  if (node.type === "TableKeyString" && node.value.type === "NumericLiteral") {
    return {
      [node.key.name]: node.value.value,
    };
  }
  if (node.type === "TableKeyString" && node.value.type === "StringLiteral") {
    return {
      [node.key.name]: node.value.raw?.replace(/\"/g, ""),
    };
  }
  if (
    node.type === "TableKeyString" &&
    node.value.type === "TableConstructorExpression"
  ) {
    return {
      [node.key.name]: node.value.fields?.reduce((acc: any, field: Node) => {
        return { ...acc, ...convertToJson2(field) };
      }, {}),
    };
  }
  return {};
};

type AssignmentStatement = {
  type: "AssignmentStatement";
  variables: {
    type: "MemberExpression";
    indexer: ".";
    identifier: {
      type: "Identifier";
      name: string;
    };
    base: {
      type: "Identifier";
      name: string;
    };
  }[];
  init: {
    type: string;
    fields: Node[];
  }[];
};

const extractExpressionFromRootPiece = (rootPiece: AssignmentStatement) => {
  const base = rootPiece.variables[0]?.base?.name;
  const identifier = rootPiece.variables[0]?.identifier?.name;
  return `${base}.${identifier}`;
};

const walkForValueNode = (chunk: parser.Chunk, expression: string) => {
  const expressionPieces = expression.split(".");
  const rootPieces = chunk.body.filter(
    (bodyPiece) => bodyPiece.type === "AssignmentStatement"
  ) as unknown as AssignmentStatement[];
  const possibleRootExpressionPieces = [
    expressionPieces[0],
    `${expressionPieces[0]}.${expressionPieces[1]}`,
  ];
  let matchesSingle = true;
  const foundRoots = rootPieces.filter((rootPiece) => {
    const rootPieceExpression = extractExpressionFromRootPiece(rootPiece);
    if (possibleRootExpressionPieces[0] === rootPieceExpression) {
      matchesSingle = true;
      return true;
    }
    if (possibleRootExpressionPieces[1] === rootPieceExpression) {
      matchesSingle = false;
      return true;
    }
    return false;
  });

  // console.log("Found roots", foundRoots);
  const nodesFromRoots = foundRoots
    .flatMap((root) => root.init)
    .flatMap((init) => init.fields)
    .filter(notNullOrUndefined);
  // console.log(
  //   "Nodes from roots",
  //   JSON.stringify(
  //     nodesFromRoots.map(({ key, ...rest }) => ({ ...key })),
  //     null,
  //     2
  //   )
  // );
  const startingIndex = matchesSingle ? 1 : 2;
  const firstNode = nodesFromRoots.find(
    (node) => node.key.name === expressionPieces[startingIndex]
  );
  if (startingIndex === expressionPieces.length - 1 && firstNode) {
    const obj = convertToJson2(firstNode);
    // console.log("Didn't need to walk far", JSON.stringify(obj, null, 2));
    console.log(JSON.stringify(obj, null, 2));
    return obj;
  }

  // Initial node logic is slightly different from others, handle it here
  let targetNode: Node | undefined = firstNode;
  // console.log("Initial target node", JSON.stringify(targetNode, null, 2));
  for (let i = startingIndex + 1; i < expressionPieces.length; i++) {
    targetNode = targetNode?.value?.fields?.find(
      (node: Node) => node.key.name === expressionPieces[i]
    );
    if (!targetNode) {
      throw new Error("Could not find node");
    }
  }
  if (targetNode) {
    // console.log("Found target node", JSON.stringify(targetNode, null, 2));
  } else {
    throw new Error("Could not find target node");
  }
  const obj = convertToJson2(targetNode);
  console.log(JSON.stringify(obj, null, 2));
};
// console.log(process.argv);
walkForValueNode(
  exampleAst,
  // Change this to whatever object you want to extract.
  // Needs to resolve to primitive values (number or string for now)
  // "TraitSetData.Chaos.ChaosWeaponBlessing"
  process.argv[2]
);
