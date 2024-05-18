import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "../data/gods/abilityTypes";
import { gods } from "../data/gods/all";
import { abilityFormatter } from "../data/gods/formatters";
import { Boon } from "../data/gods/god";
import { DUO } from "../data/gods/rarities";
import { Command } from "./command";

const allGodNames = gods.map((god) => god.name).join("|");

const godCommandExpression = RegExp(`^(${allGodNames}) ?(.*)?$`, "i");

type AbilityFilter = {
  matcher: RegExp;
  display: string;
  filter: (ability: Boon) => boolean;
};

const attackFilter: AbilityFilter = {
  matcher: /attack/i,
  display: `[attack]`,
  filter: (ability) => ability.type === ATTACK,
};

const specialFilter: AbilityFilter = {
  matcher: /special/i,
  display: `[special]`,
  filter: (ability) => ability.type === SPECIAL,
};

const castFilter: AbilityFilter = {
  matcher: /cast/i,
  display: `[cast]`,
  filter: (ability) => ability.type === CAST,
};

const dashFilter: AbilityFilter = {
  matcher: /dash/i,
  display: `[dash]`,
  filter: (ability) => ability.type === DASH,
};

const gainFilter: AbilityFilter = {
  matcher: /gain/i,
  display: `[gain]`,
  filter: (ability) => ability.type === GAIN,
};

const otherFilter: AbilityFilter = {
  matcher: /other/i,
  display: `[other]`,
  filter: (ability) => ability.type === OTHER && !ability.values[DUO],
};

const infusionFilter: AbilityFilter = {
  matcher: /infusion/i,
  display: `[infusion]`,
  filter: (ability) => ability.type === INFUSION,
};

const duosFilter: AbilityFilter = {
  matcher: /duos/i,
  display: `[duos]`,
  filter: (ability) => Boolean(ability.values[DUO]),
};

const abilityFilters: AbilityFilter[] = [
  attackFilter,
  specialFilter,
  castFilter,
  dashFilter,
  gainFilter,
  otherFilter,
  infusionFilter,
  duosFilter,
];

const godCommand = new Command({
  command: godCommandExpression,
  name: "God",
  test: false,
  example: "zeus attack",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const godName = commandMatches[1];
    logger.debug("God to find " + godName);
    const god = gods.find((god) => god.name.toLowerCase() == godName);
    if (!god) {
      logger.debug("God not found");
      return;
    }
    logger.debug("God info found ", god);
    const godOptions = abilityFilters
      .filter((filter) => Object.values(god.abilities).filter(filter.filter))
      .map((filter) => filter.display)
      .join(" ");
    const requestedAbilityType = commandMatches[2];
    logger.debug("Requested ability type " + requestedAbilityType);
    const abilityFilter = abilityFilters.find((f) =>
      f.matcher.test(requestedAbilityType)
    );
    if (!abilityFilter) {
      logger.debug("Ability filter not found");
      return bot.say(channelId, `${god?.info} ${godOptions}`);
    }
    const filteredAbilities = Object.values(god.abilities).filter(
      abilityFilter.filter
    );
    if (filteredAbilities.length === 1) {
      const message = abilityFormatter(god.name)(filteredAbilities[0])();
      logger.debug("God message " + message);
      return bot.say(channelId, message);
    }
    const message = filteredAbilities
      .map((ability) => `[${ability.name.toLowerCase()}]`)
      .join(" ");
    logger.debug("God message " + message);
    return bot.say(channelId, message);
  },
});

export { godCommand };
