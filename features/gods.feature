Feature: Requests about gods and their boons
    Background: Channel and user
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can request information about a god
        When the user says to the bot {!poseidon}
        Then the bot responds with {Poseidon, God of the Sea. His powers knock enemies away.}
        And the bot responds with {[attack] [special] [cast] [dash] [other] [infusion] [duos]}

    Scenario: A user can request information about a god's attack
        When the user says to the bot {!poseidon attack}
        Then the bot responds with {Wave Strike (Poseidon) [Water]}
        And the bot responds with {Your Attacks hit foes with a splash that knocks foes away and deals}
        And the bot responds with {c:15}

    Scenario: A user can request information about a god's special
        When the user says to the bot {!poseidon special}
        Then the bot responds with {Wave Flourish (Poseidon) [Water]}
        And the bot responds with {Your Specials hit foes with a splash that knocks other foes away and deals}
        And the bot responds with {(c:20 r:30 e:40)}

    Scenario: A user can request information about a god's cast
        When the user says to the bot {!poseidon cast}
        Then the bot responds with {Geyser Ring (Poseidon) [Water]}
        And the bot responds with {Your [omega] Cast immediately detonates, dealing (c:100 r:150) damage and knocking foes away}

    Scenario: A user can request information about a god's dash
        When the user says to the bot {!poseidon dash}
        Then the bot responds with {Breaker Sprint (Poseidon) [Water]}
        And the bot responds with {Your Sprint deals (c:80 r:120) damage on impact and knocks foes away, but uses 5 [mana] per hit}

    Scenario: A user can request information about other boons for a god
        When the user says to the bot {!poseidon other}
        Then the bot responds with {[hydraulic might] [fluid gain] [flood control] [double up]}

    Scenario: A user can request information about a god's infusion
        When the user says to the bot {!poseidon infusion}
        Then the bot responds with {Water Fitness (Poseidon)}
        And the bot responds with {If you have at least 4 [water] boons, then gain (c:100) max health}

    Scenario: A user can request information about a god's duos
        When the user says to the bot {!poseidon duos}
        Then the bot responds with {[island getaway] [beach ball] [natural selection] [seismic hammer] [golden rule] [scalding vapor] [killer current]}

    Scenario: A user requests an attack for a god who has none
        When the user says to the bot {!hermes attack}
        Then the bot responds with {Hermes has no [attack] boon}

    Scenario: A user can request Chaos' infusion
        When the user says to the bot {!chaos infusion}
        Then the bot responds with {Chant (Chaos)}
        And the bot responds with {Afterward, your [omega] moves deal (c:30% r:36% e:42% h:48%) more damage per [cosmic] you have}
