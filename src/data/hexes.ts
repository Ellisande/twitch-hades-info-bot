export type Hex = {
  name: string;
  info: string;
  ready: number;
};

const darkSide: Hex = {
  name: "Dark Side",
  info: "Your Hex turns you into an Impervious living nightmare with her own abilities for 5 Sec.",
  ready: 90,
};

const wolfHowl: Hex = {
  name: "Wolf Howl",
  info: "Your Hex makes you rise up then crash down in the target area for 200 damage.",
  ready: 80,
};

const totalEclipse: Hex = {
  name: "Total Eclipse",
  info: "Your Hex blasts the target area for 1000 damage after 4 Sec.",
  ready: 200,
}

export const hexes: Array<Hex> = [
  darkSide,
  wolfHowl,
  totalEclipse,
];