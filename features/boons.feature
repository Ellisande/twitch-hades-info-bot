Feature: Uses can ask directly about boons

    Scenario: Users can ask for an ability by name
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!after party}
        Then the bot responds with {After Party (Other) - If your health is lower than (c:20% r:25% e:30%) after Encounters restore to the threshold}

    Scenario: Bot does not respond to None
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!none}
        Then the bot does not respond
