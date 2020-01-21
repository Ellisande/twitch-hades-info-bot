Feature: Users can ask about Demeter

    Scenario: User can ask for general information about Demeter
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!demeter}
        Then the bot responds with {Demeter, God of the Harvest}
        And the bot responds with {[attack] [special] [cast] [dash] [revenge] [aid] [other]}

