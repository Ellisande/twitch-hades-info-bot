Feature: Users can ask about statuses

    Scenario: User can ask about weakness
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!weak}
        Then the bot responds with {Enemies with weak deal 30% less damage. Lasts 3 seconds.}
        And the bot responds with {[status]}