const hammerFormatter =
  (weapon: string) =>
  ({
    name,
    description,
    exclusives,
  }: {
    name: string;
    description: string;
    exclusives: string[];
  }) => {
    const nameRegexString = name.replace(" ", " *");
    const exclusivesString =
      exclusives && exclusives.length > 0 ? exclusiveFormatter(exclusives) : "";
    const descriptionString = `${name} (${weapon}) - ${description}${exclusivesString} `;
    return {
      name: name.toLowerCase(),
      matcher: nameRegexString,
      description: descriptionString,
    };
  };

const exclusiveFormatter = (names: string[]) =>
  ` Mutually exclusive: ${names.map((name) => `[${name}]`).join(" ")}`;

export { hammerFormatter };
