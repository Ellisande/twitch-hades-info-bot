Feature: Users can ask about hexes

    Scenario: User can ask about hexes
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!hexes}
        Then the bot responds with {Put ! then the name of the hex to find out more. Example !total eclipse.}
        And the bot responds with {Available hexes:}
        And the bot responds with {[Total Eclipse]}

    Scenario: User can ask about hex
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!hex}
        Then the bot responds with {Put ! then the name of the hex to find out more.}

    Scenario: User can ask about Total Eclipse
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!totalEclipse}
        Then the bot responds with {Total Eclipse}
        And the bot responds with {Your Hex blasts the target area for 1000 damage after 4 Sec}
        And the bot responds with {Ready after 200 [mana]}

    Scenario: User can ask about Total Eclipse capitalized and spaced
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!Total Eclipse}
        Then the bot responds with {Total Eclipse}