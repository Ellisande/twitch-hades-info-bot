const hardLabor = {
  name: "Hard Labor",
  description:
    "All ranks increase foes damage by 20%. 5 ranks. 1 heat per rank. 5 heat - 100% maximum increase."
};

const lastingConsequences = {
  name: "Lasting Consequences",
  description:
    "Each rank reduces all healing by 25%. 4 ranks. 1 heat per rank. 4 heat - 100% healing reduction maximum."
};

const convenienceFee = {
  name: "Convenience Fee",
  description:
    "Each rank raises prices by 40%. 2 ranks. 1 heat per rank. 2 heat - 80% price increase maximum."
};

const jurySummons = {
  name: "Jury Summons",
  description:
    "Each rank makes you face 20% additional foes. 3 ranks. 1 heat per rank. 3 heat - 60% more enmies maximum."
};

const extremeMeasures = {
  name: "Extreme Measures",
  description:
    "Each rank arms increases the difficulty of one act boss. 3 ranks. Heat per rank 1/2/2. 3 heat - First three bosses enhanced maximum."
};

const calisthenicsProgram = {
  name: "Calisthenics Program",
  description:
    "Each rank adds 15% to your foes life totals. 2 ranks. 1 heat per rank. 2 heat - 30% increased foe life maximum."
};

const benefitsPackage = {
  name: "Benefits Package",
  description:
    "Each rank grans most Armored foes 1 perk. 2 ranks. Heat per rank 2/3. 5 heat - 2 perks maximum."
};

const middleManagement = {
  name: "Middle Management",
  description:
    "This forces you to deal with 1 Elite foe or other problem in mini-boss encounters. 1 rank. 2 heat."
};

const underworldCustoms = {
  name: "Underworld Customs",
  description:
    "This requires you to sell 1 boon on leaving each act. 1 rank. 2 heat."
};

const forcedOvertime = {
  name: "Forced Overtime",
  description:
    "Each rank makes all foes move and attack 20% faster. 2 ranks. 3 heat per rank. 6 heat - 40% speed increase maximum."
};

const heightenedSecurity = {
  name: "Heightened Security",
  description: "Traps deal 400% more damage. 1 rank. 1 heat."
};

const routineInspection = {
  name: "Routine Inspection",
  description:
    "Each rank deactivates 3 talents from the mirror of night, starting from the bottom. 4 ranks. 2 heat per rank. 8 heat - 12 talent reduction maximum."
};

const damageControl = {
  name: "Damage Control",
  description:
    "Each rank gives all foes one stack of invulnerability, which makes them ingore a single instance of damage. 2 ranks. 1 heat per rank. 2 heat - 2 stacks of invulnerability maximum."
};

const approvalProcess = {
  name: "Approval Process",
  description:
    "Each rank reduces your choices by 1 when you are offered boons, items, and upgrades. 2 ranks. Heat per rank 2/3. 5 heat - 2 less choices maximum."
};

const tightDeadline = {
  name: "Tight Deadline",
  description:
    "Each rank reduces the time to clear each region by 2 minutes, starting at 9 minutes. 2 ranks. Heat per rank 2/3. 5 heat - 7 minutes per act maximum."
};

const pactMapper = modifier => ({
  ...modifier,
  matcher: modifier.name.replace(" ", " *"),
  description: `${modifier.name} (pact modifier) - ${modifier.description}`
});

const pactModifiers = [
  hardLabor,
  lastingConsequences,
  convenienceFee,
  jurySummons,
  extremeMeasures,
  calisthenicsProgram,
  benefitsPackage,
  middleManagement,
  underworldCustoms,
  forcedOvertime,
  heightenedSecurity,
  routineInspection,
  damageControl,
  approvalProcess,
  tightDeadline
].map(pactMapper);

module.exports = { pactModifiers };
