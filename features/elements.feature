Feature: User's can request information about boon elements
    Background:
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: Users can request a list of all elements
        When the user says to the bot {!elements}
        Then the bot responds with {Put ! then the name of an element to find out more.}
        And the bot responds with {[Earth] [Water] [Air] [Fire] [Cosmic]}

    Scenario: Users can ask about a specific element
        When the user says to the bot {!water}
        Then the bot responds with {Gods with [Water] boons:}
        And the bot responds with {[Aphrodite]}

    Scenario: The bot doesn't respond when an unknown element is requested
        When the user says to the bot {!boogers}
        Then the bot does not respond
