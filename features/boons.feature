Feature: A user can request information about a specific boon
    Background: Channel and user
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can request information about a specific boon
        When the user says to the bot {!air quality}
        Then the bot responds with {Air Quality (Zeus) - While you have at least 5 [air], you can never deal less damage than (c:30) per hit}

    Scenario: A user requests info about a boon with no prereqs
        When the user says to the bot {!flutter strike}
        Then the bot does not respond with {has prereq}

    Scenario: A user requests info about a boon with prereqs
        When the user says to the bot {!ecstatic obsession}
        Then the bot responds with {has prereq}

    Scenario: A user asks about a boons prereqs
        When the user says to the bot {!ecstatic obsession prereqs}
        Then the bot responds with {Prerequisites for Ecstatic Obsession (Aphrodite)}
        And the bot responds with {(one of [Broken Resolve][Sweet Surrender])}
        And the bot responds with {and (one of [Rapture Ring][Passion Dash][Glamour Gain])}
