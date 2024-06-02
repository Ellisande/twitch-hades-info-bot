import { COMMON } from "../gods/rarities";
import { ActBonus, ActLocation } from "./actBonus";

export const icarus: ActBonus = {
  name: "Icarus",
  info: "The shade of a child who once flew too close to the sun, Icarus now helps fight the against Chronos's forces. Bonus boon giver on the surface.",
  location: ActLocation.RIFT_OF_THESSALY,
  abilities: {
    destructiveCoating: {
      name: "Destructive Coating",
      type: "Bonus",
      info: (value: string) =>
        `Gain +${value} bonus armor. The next time you lose all your armor, deal 4000 damage to nearby foes`,
      values: {
        [COMMON]: 40,
      },
    },
    protectiveCoating: {
      name: "Protective Coating",
      type: "Bonus",
      info: (value: string) =>
        `Gain +${value} bonus armor. The next time you lose all your armor, become Impervious for 8 seconds`,
      values: {
        [COMMON]: 80,
      },
    },
    hazardBoom: {
      name: "Hazard Boom",
      type: "Bonus",
      info: (value: string) =>
        `Your Casts also blast the area after 4 seconds, dealing ${value} damage to foes, but 20 to you`,
      values: {
        [COMMON]: 500,
      },
    },
    ingeniousStrike: {
      name: "Ingenious Strike",
      type: "Bonus",
      info: (value: string) =>
        `After you enter a Location, [prime] ${value} [magick] to give your Attacks +10 power`,
      values: {
        [COMMON]: 20,
      },
    },
    ingeniousFlourish: {
      name: "Ingenious Flourish",
      type: "Bonus",
      info: (value: string) =>
        `After you enter a Location, [prime] ${value} [magick] to give your Specials +20 power`,
      values: {
        [COMMON]: 20,
      },
    },
    explosiveIntent: {
      name: "Explosive Intent",
      type: "Bonus",
      info: (value: string) =>
        `Your [omega] Moves also deal ${value} damage in an area around foes they hit, but use +10 [magick]`,
      values: {
        [COMMON]: 50,
      },
    },
    supplyChain: {
      name: "Supply Chain",
      type: "Bonus",
      info: (value: string) =>
        `Each time you clear 5 Encounters, receive ${value} health and 3 pom slices`,
      values: {
        [COMMON]: 10,
      },
    },
  },
};
