Feature: A user can request information about a specific boon
    Background: Channel and user
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can request information about a specific boon
        When the user says to the bot {!air quality}
        Then the bot responds with {Air Quality (Zeus) - While you have at least 5 [air], you can never deal less damage than (c:30) per hit}

    Scenario: A user can request information about a boon with alternate syntax
        When the user says to the bot {!airQuality}
        Then the bot responds with {Air Quality (Zeus) - While you have at least 5 [air], you can never deal less damage than (c:30) per hit}

    Scenario: A user requests info about a boon with no prereqs
        When the user says to the bot {!flutter strike}
        Then the bot does not respond with {has requirements}

    Scenario: A user requests info about a boon with prereqs
        When the user says to the bot {!ecstatic obsession}
        Then the bot responds with {has requirements}

    Scenario: A user asks about a boon's prereqs
        When the user says to the bot {!ecstatic obsession reqs}
        Then the bot responds with {Requirements for Ecstatic Obsession (Aphrodite)}
        And the bot responds with {(one of [Broken Resolve][Sweet Surrender])}
        And the bot responds with {and (one of [Rapture Ring][Passion Dash][Glamour Gain])}

    Scenario: A user asks about a duo boon
        When the user says to the bot {!burning desire}
        Then the bot responds with {Burning Desire (Aphrodite + Hestia) [Cosmic]}
        And then the bot responds with {Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for (d:160) damage}

    Scenario: A user asks for a duo boon's prereqs
        When the user says to the bot {!burning desire reqs}
        Then the bot responds with {Requirements for Burning Desire (Aphrodite + Hestia)}
        And the bot responds with {(one of [Rapture Ring][Passion Dash][Glamour Gain])}
        And the bot responds with {(one of [Smolder Ring][Soot Sprint][Hearth Gain])}

    Scenario: A user asks for prereqs for a boon that has none
        When the user says to the bot {!flutter strike reqs}
        Then the bot responds with {No known requirements}

    Scenario: A user asks for prereqs with alternate reqs syntax
        When the user says to the bot {!ecstatic obsession requirements}
        Then the bot responds with {Requirements for Ecstatic Obsession (Aphrodite)}
        And the bot responds with {(one of [Broken Resolve][Sweet Surrender])}
        And the bot responds with {and (one of [Rapture Ring][Passion Dash][Glamour Gain])}

    Scenario: A user asks for prereqs with alternate boon syntax
        When the user says to the bot {!ecstaticObsession reqs}
        Then the bot responds with {Requirements for Ecstatic Obsession (Aphrodite)}
        And the bot responds with {(one of [Broken Resolve][Sweet Surrender])}
        And the bot responds with {and (one of [Rapture Ring][Passion Dash][Glamour Gain])}

    Scenario: A user asks for Chaos' infusion
        When the user says to the bot {!chant}
        Then the bot responds with {Chant (Chaos)}
        And the bot responds with {Afterward, your [omega] moves deal (c:30% r:36% e:42% h:48%) more damage per [cosmic] you have}
