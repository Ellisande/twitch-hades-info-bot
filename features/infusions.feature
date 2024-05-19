Feature: Users can request information about infusions
    Background:
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: Users can request information about infusions
        When the user says to the bot {!infusions}
        Then the bot responds with {Infusions are a special type of boon}
        And the bot responds with {[Earth] [Water] [Air] [Fire] [Cosmic]}

    Scenario: Users can request available infusions for an element
        When the user says to the bot {!infusions air}
        Then the bot responds with {Infusions that require at least one [Air]}
        And the bot responds with {Wispy Wiles (Aphrodite)}
        And the bot responds with {Tall Order (Hermes)}
