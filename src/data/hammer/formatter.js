const hammerFormatter = weapon => ({ name, description, exclusives }) => {
  const nameRegexString = name.replace(" ", " *");
  const exclusivesString =
    exclusives && exclusives.length > 0 ? exclusiveFormatter(exclusives) : "";
  const descriptionString = `${name} (${weapon}) - ${description}${exclusivesString} `;
  return {
    name: name.toLowerCase(),
    matcher: nameRegexString,
    description: descriptionString
  };
};

const exclusiveFormatter = names =>
  ` Mutually exclusive: ${names.map(name => `[${name}]`).join(" ")}`;

module.exports = {
  hammerFormatter
};
