import { DuoBoon } from "./god";
import { DUO } from "./abilityTypes";
import { COSMIC } from "./elements";
// Gods
import * as aphrodite from "./aphrodite";
import * as apollo from "./apollo";
import * as demeter from "./demeter";
import * as hephaestus from "./hephaestus";
import * as hera from "./hera";
import * as hestia from "./hestia"
import * as poseidon from "./poseidon";
import * as zeus from "./zeus";

const burningDesire: DuoBoon = {
  name: "Burning Desire",
  gods: [aphrodite.aphrodite, hestia.hestia],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for ${value} damage`,
  values: {
    [DUO]: { 1: 160 },
  },
  prerequisites: [
    [aphrodite.raptureRing, aphrodite.passionDash, aphrodite.glamourGain],
    [hestia.smolderRing, hestia.sootSprint, hestia.hearthGain],
  ],
};

const romanticSpark: DuoBoon = {
  name: "Romantic Spark",
  gods: [aphrodite.aphrodite, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `If you Sprint into [blitz]-afflicted foes, the effect actives immediately and is ${value} stronger`,
  values: {
    [DUO]: { 1: "200%" },
  },
  prerequisites: [
    [zeus.heavenFlourish, zeus.heavenStrike],
    [
      aphrodite.passionDash,
      aphrodite.raptureRing,
      aphrodite.flutterFlourish,
      aphrodite.flutterStrike
    ],
  ],
};

const islandGetaway: DuoBoon = {
  name: "Island Getaway",
  gods: [aphrodite.aphrodite, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `You take ${value} less damage from nearby foes. Boons of Aphrodite treat all foes as nearby.`,
  values: {
    [DUO]: { 1: "15%" },
  },
  prerequisites: [
    [
      poseidon.waveStrike,
      poseidon.waveFlourish,
      poseidon.geyserRing,
      poseidon.breakerSprint
    ],
    [aphrodite.flutterStrike, aphrodite.flutterFlourish],
  ],
};

const softCaress: DuoBoon = {
  name: "Soft Caress",
  gods: [aphrodite.aphrodite, hephaestus.hephaestus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `The first time you would take damage in each Encounter, turn ${value} of the hit into healing`,
  values: {
    [DUO]: { 1: "75%" },
  },
  prerequisites: [
    [aphrodite.raptureRing, aphrodite.passionDash, aphrodite.glamourGain],
    [hephaestus.anvilRing, hephaestus.smithySprint, hephaestus.fixedGain],
  ],
};

const sunnyDisposition: DuoBoon = {
  name: "Sunny Disposition",
  gods: [aphrodite.aphrodite, apollo.apollo],
  type: DUO,
  element: COSMIC,
  info: (value) => `Whenever you create Heartthrobs, create ${value} more`,
  values: {
    [DUO]: { 1: 2 },
  },
  prerequisites: [
    [aphrodite.heartBreaker],
    [apollo.novaStrike, apollo.novaFlourish, apollo.lucidGain, apollo.solarRing],
  ],
};

const heartyAppetite: DuoBoon = {
  name: "Hearty Appetite",
  gods: [aphrodite.aphrodite, demeter.demeter],
  type: DUO,
  element: COSMIC,
  info: (value) => `You deal ${value} more damage per 100 max health`,
  values: {
    [DUO]: { 1: "10%" },
  },
  prerequisites: [
    [demeter.plentifulForage, demeter.winterCoat],
    [aphrodite.shamelessAttitude, aphrodite.lifeAffirmation, aphrodite.healthyRebound],
  ],
};

const soulMate: DuoBoon = {
  name: "Soul Mate",
  gods: [aphrodite.aphrodite, hera.hera],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Foes with [hitch] take ${value} more damage and are [weak], but only 2 can be afflicted at a time.`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [hera.swornStrike, hera.swornFlourish, hera.nexusSprint, hera.nastyComeback],
    [aphrodite.raptureRing, aphrodite.passionDash, aphrodite.glamourGain],
  ],
};

const torrentialDownpour: DuoBoon = {
  name: "Torrential Downpour",
  gods: [apollo.apollo, demeter.demeter],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Each time you use your [omega] Cast in an Encounter, it gets ${value} stronger but also uses +5 [mana]`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [apollo.solarRing, apollo.blindingSprint, apollo.lucidGain],
    [demeter.arcticRing, demeter.frigidSprint, demeter.tranquilGain],
  ],
};

const stellarSlam: DuoBoon = {
  name: "Stellar Slam",
  gods: [apollo.apollo, hephaestus.hephaestus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
  prerequisites: [
    [apollo.novaStrike, apollo.novaFlourish, apollo.superNova],
    [hephaestus.volcanicFlourish, hephaestus.volcanicStrike, hephaestus.smithySprint],
  ],
};

const phoenixSkin: DuoBoon = {
  name: "Phoenix Skin",
  gods: [apollo.apollo, hestia.hestia],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Give up -100 max health. If you do not take or deal damage for 3 seconds, rapidly restore ${value} health/sec`,
  values: {
    [DUO]: {
      1: 3,
    },
  },
  prerequisites: [
    [apollo.novaStrike, apollo.novaFlourish, apollo.lucidGain],
    [hestia.flameStrike, hestia.flameFlourish, hestia.smolderRing],
    [hestia.burntOffering, hestia.flammableCoating, hestia.hearthGain],
  ],
};

const beachBall: DuoBoon = {
  name: "Beach Ball",
  gods: [apollo.apollo, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your Sprint creates a water sphere behind you. After you stop, it surges ahead and bursts for ${value} damage`,
  values: {
    [DUO]: { 1: 140 },
  },
  prerequisites: [
    [apollo.blindingSprint, apollo.lucidGain],
    [poseidon.breakerSprint, poseidon.fluidGain],
  ],
};

const sunWorshiper: DuoBoon = {
  name: "Sun Worshiper",
  gods: [apollo.apollo, hera.hera],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `In each Encounter, the first foe you slay returns to fight for you dealing ${value} of its normal damage`,
  values: {
    [DUO]: { 1: "200%" },
  },
  prerequisites: [
    [hera.engagementRing, hera.nexusSprint, hera.bornGain],
    [apollo.solarRing, apollo.blindingSprint, apollo.lucidGain],
  ],
};

const gloriousDisaster: DuoBoon = {
  name: "Glorious Disaster",
  gods: [apollo.apollo, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `You can Channel +30 [mana] into your [omega] Cast to repeatedly strike foes for ${value} bolt damage every 0.13 seconds`,
  values: {
    [DUO]: { 1: 50 },
  },
  prerequisites: [
    [apollo.solarRing],
    [zeus.heavenStrike, zeus.heavenFlourish, zeus.thunderSprint]
  ],
};

const roomTemperature: DuoBoon = {
  name: "Room Temperature",
  gods: [demeter.demeter, hephaestus.hephaestus],
  type: DUO,
  element: COSMIC,
  info: (_) =>
    `Your blast effects from Hephaestus clear [freeze], so you [freeze] foes again right away.`,
  values: {
    [DUO]: { 1: 0 },
  },
  prerequisites: [
    [hephaestus.volcanicFlourish, hephaestus.volcanicStrike, hephaestus.smithySprint],
    [demeter.iceStrike, demeter.iceFlourish],
  ],
};

const freezerBurn: DuoBoon = {
  name: "Freezer Burn",
  gods: [demeter.demeter, hestia.hestia],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Whenever you inflict [freeze], amplify any [scorch] effects already on the foe by ${value}`,
  values: {
    [DUO]: { 1: "100%" },
  },
  prerequisites: [
    [demeter.iceStrike, demeter.iceFlourish],
    [hestia.flameStrike, hestia.flameFlourish],
  ],
};

const apocalypticStorm: DuoBoon = {
  name: "Apocalyptic Storm",
  gods: [demeter.demeter, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your [blitz] effects last ${value} seconds longer, and active against all [blitz]-afflicted foes at once`,
  values: {
    [DUO]: { 1: 8 },
  },
  prerequisites: [
    [demeter.iceStrike, demeter.iceFlourish, demeter.arcticRing, demeter.frigidSprint],
    [zeus.heavenStrike, zeus.heavenFlourish],
  ],
};

const naturalSelection: DuoBoon = {
  name: "Natural Selection",
  gods: [demeter.demeter, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Location Rewards exclude max health, max [mana], and gold. Boon are ${value} more likely to be Rare or better`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [poseidon.fluidGain, poseidon.breakerSprint, poseidon.oceansBounty, poseidon.sunkenTreasure, poseidon.doubleUp],
    [demeter.tranquilGain, demeter.frigidSprint, demeter.winterCoat, demeter.coldStorage, demeter.rareCrop],
  ],
};

const cherishedHeirloom: DuoBoon = {
  name: "Cherished Heirloom",
  gods: [demeter.demeter, hera.hera],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Most other Keepsakes you equip are ${value} ranks strong this night (if possible)`,
  values: {
    [DUO]: { 1: 1 },
  },
  prerequisites: [
    [hera.nexusSprint, hera.engagementRing, hera.bornGain],
    [demeter.arcticRing, demeter.frigidSprint, demeter.tranquilGain],
  ],
};

const chainReaction: DuoBoon = {
  name: "Chain Reaction",
  gods: [hephaestus.hephaestus, hestia.hestia],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `If you use your blast effects from Hephaestus just within ${value} seconds of them recharging, they fire 2 times`,
  values: {
    [DUO]: { 1: 0.85 },
  },
  prerequisites: [
    [hephaestus.volcanicFlourish, hephaestus.volcanicStrike],
    [hestia.flameStrike, hestia.flameFlourish, hestia.smolderRing],
  ],
};

const spitefulStrength: DuoBoon = {
  name: "Spiteful Strength",
  gods: [hephaestus.hephaestus, hera.hera],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your Attacks and Specials deal ${value} more damage while not empowered by Boons`,
  values: {
    [DUO]: "200%",
  },
  prerequisites: [
    [hera.braveFace, hera.nastyComeback, hera.keenIntuition, hera.bornGain],
    [
      hephaestus.trustyShield,
      hephaestus.mintCondition,
      hephaestus.heavyMetal,
      hephaestus.toughTrade,
      hephaestus.uncannyFortitude,
      hephaestus.fixedGain,
    ],
  ],
};

const seismicHammer: DuoBoon = {
  name: "Seismic Hammer",
  gods: [hephaestus.hephaestus, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your [omega] cast occasionally creates a blast that deals 500 damage in the area. Recharges after ${value} seconds`,
  values: {
    [DUO]: { 1: 15 },
  },
  prerequisites: [
    [poseidon.geyserRing],
    [hephaestus.volcanicStrike, hephaestus.volcanicFlourish, hephaestus.smithySprint],
  ],
};

const masterConductor: DuoBoon = {
  name: "Master Conductor",
  gods: [hephaestus.hephaestus, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your chain-lightning deals ${value} more damage per bounce and can bounce to you`,
  values: {
    [DUO]: { 1: "15%" },
  },
  prerequisites: [
    [zeus.staticShock],
    [hephaestus.fixedGain, hephaestus.trustyShield, hephaestus.heavyMetal, hephaestus.mintCondition, hephaestus.toughTrade],
  ],
};

const funeralPyre: DuoBoon = {
  name: "Funeral Pyre",
  gods: [hera.hera, hestia.hestia],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `While you Channel your [omega] moves, repeatedly inflict ${value} [scorch] on nearby foes`,
  values: {
    [DUO]: { 1: 90 },
  },
  prerequisites: [
    [hera.swornStrike, hera.swornFlourish, hera.engagementRing, hera.bornGain],
    [hestia.flameStrike, hestia.flameFlourish, hestia.smolderRing, hestia.hearthGain],
  ],
};

const goldenRule: DuoBoon = {
  name: "Golden Rule",
  gods: [hera.hera, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) => `You deal ${value} more damage per 100 gold you have`,
  values: {
    [DUO]: "5%",
  },
  prerequisites: [
    [hera.engagementRing, hera.nexusSprint, hera.bornGain],
    [poseidon.geyserRing, poseidon.breakerSprint, poseidon.fluidGain],
    [poseidon.oceansBounty, poseidon.doubleUp],
  ],
};

const queensRansom: DuoBoon = {
  name: "Queen's Ransom",
  gods: [hera.hera, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Give up all your Boons of Zeus. For each raise all of your Boons of Hera by ${value} levels`,
  values: {
    [DUO]: { 1: 3 },
  },
  prerequisites: [
    [hera.swornStrike, hera.swornFlourish, hera.nexusSprint, hera.engagementRing, hera.bornGain],
    [zeus.heavenStrike, zeus.heavenFlourish, zeus.stormRing, zeus.thunderSprint, zeus.ionicGain],
  ],
};

const thermalDynamics: DuoBoon = {
  name: "Thermal Dynamics",
  gods: [hestia.hestia, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your [blitz] effects also inflict ${value} [scorch] whenever they deal damage`,
  values: {
    [DUO]: { 1: 80 },
  },
  prerequisites: [
    [zeus.heavenStrike, zeus.heavenFlourish],
    [hestia.flameFlourish, hestia.flameStrike],
  ],
};

const scaldingVapor: DuoBoon = {
  name: "Scalding Vapor",
  gods: [hestia.hestia, poseidon.poseidon],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `If foes with [slip] are struck with fire from Hestia, they are engulfed in [steam] that deals ${value} damage every 0.2 seconds`,
  values: {
    [DUO]: { 1: 25 },
  },
  prerequisites: [
    [poseidon.slipperySlope],
    [
      hestia.flameStrike,
      hestia.flameFlourish,
      hestia.smolderRing,
      hestia.spontaneousCombustion,
      burningDesire,
      hestia.controlledBurn,
      hestia.glowingCoal,
    ],
  ],
};

const killerCurrent: DuoBoon = {
  name: "Killer Current",
  gods: [poseidon.poseidon, zeus.zeus],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Your lightning deals ${value} bonus damage to [slip]-afflicted foes`,
  values: {
    [DUO]: { 1: "30%" },
  },
  prerequisites: [
    [poseidon.slipperySlope],
    [
      zeus.heavenStrike,
      zeus.heavenFlourish,
      zeus.stormRing,
      zeus.thunderSprint,
      zeus.divineVengeance,
      zeus.lightningLance,
    ],
  ],
};

const kingsRansom: DuoBoon = {
  name: "King's Ransom",
  gods: [zeus.zeus, hera.hera],
  type: DUO,
  element: COSMIC,
  info: (value) =>
    `Give up all your Boons of Hera. For each raise all of your Boons of Zeus by ${value} levels`,
  values: {
    [DUO]: { 1: 2 },
  },
  prerequisites: [
    [hera.swornFlourish, hera.swornStrike, hera.engagementRing, hera.nexusSprint, hera.bornGain],
    [zeus.heavenFlourish, zeus.heavenStrike, zeus.stormRing, zeus.thunderSprint, zeus.ionicGain],
  ],
};

export const duos: DuoBoon[] = [
  burningDesire,
  romanticSpark,
  islandGetaway,
  softCaress,
  sunnyDisposition,
  heartyAppetite,
  soulMate,
  torrentialDownpour,
  stellarSlam,
  phoenixSkin,
  beachBall,
  sunWorshiper,
  gloriousDisaster,
  roomTemperature,
  freezerBurn,
  apocalypticStorm,
  naturalSelection,
  cherishedHeirloom,
  chainReaction,
  spitefulStrength,
  seismicHammer,
  masterConductor,
  funeralPyre,
  goldenRule,
  queensRansom,
  thermalDynamics,
  scaldingVapor,
  killerCurrent,
  kingsRansom,
];
