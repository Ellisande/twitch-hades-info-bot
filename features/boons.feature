Feature: A user can request information about a specific boon
    Background: Channel and user
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can request information about a specific boon
        When the user says to the bot {!air quality}
        Then the bot responds with {Air Quality (Zeus) - While you have at least 5 [air], you can never deal less damage than (c:30) per hit}