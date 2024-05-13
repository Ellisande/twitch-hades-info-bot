const defaultProfile = {
  format: [
    process.env.CI || !process.stdout.isTTY ? "progress" : "progress-bar",
    "json:./reports/cucumber-json-reports/report.json",
    "rerun:./reports/cucumber/@rerun.txt",
    "usage:./reports/cucumber/usage.txt",
  ],
  parallel: 1,
  requireModule: ["ts-node/register"],
  require: ["./features/support/**/*.ts", "./features/support/*.ts"],
  strict: false,
};

const ciProfile = {
  format: [
    process.env.CI || !process.stdout.isTTY ? "progress" : "progress-bar",
    "json:./reports/cucumber-json-reports/report.json",
    "rerun:./reports/cucumber/@rerun.txt",
    "usage:./reports/cucumber/usage.txt",
  ],
  parallel: 1,
  requireModule: ["ts-node/register"],
  require: ["./features/support/**/*.ts", "./features/support/*.ts"],
  strict: false,
  publish: true,
};

const all = {
  ...defaultProfile,
  paths: ["./features"],
};

export { ciProfile as ci, all };

export default defaultProfile;
