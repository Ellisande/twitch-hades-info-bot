Feature: Users can ask about Demeter

    Scenario: User can ask for general information about Demeter
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!demeter}
        Then the bot responds with {Demeter, God of the Harvest}
        And the bot responds with {[attack] [special] [cast] [dash] [other]}

    Scenario: Abilites with 2 values should have only 1 formatted
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!killing freeze}
        Then the bot responds with {c:20 r:30 e:40 h:50}
