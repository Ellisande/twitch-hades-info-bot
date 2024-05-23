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

    Scenario: A user asks for a duo that has the same name for two gods
        Given PENDING
        When the user says to the bot {!golden rule}
        Then the bot responds with {this is broken; chooses one of the two gods}
