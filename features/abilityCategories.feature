Feature: Users can ask about God's ability by type

    Background: User and channel
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can ask for the boon categories that a God possesses
        When the user says to the bot {!zeus}
        Then the bot responds with {Zeus, God of Thunder. His powers create bouncing lightning projectiles}
        And the bot responds with {[attack]}
        And the bot responds with {[special]}
        And the bot responds with {[cast]}
        And the bot responds with {[dash]}
        And the bot responds with {[gain]}
        And the bot responds with {[duos]}
        And the bot responds with {[infusion]}
        And the bot responds with {[other]}

    Scenario: A user can ask for a specific category of boons  from a God
        When the user says to the bot {!zeus <MULTI_ABILITY_CATEGORY>}
        Then the bot responds with <EXPECTED_COUNT> abilities
        Examples:
            | MULTI_ABILITY_CATEGORY | EXPECTED_COUNT |
            | duos                   | 6              |
            | other                  | 9              |


    Scenario: A user should get a detailed explanation if requesting a category with a single entry
        When the user says to the bot {!zeus <SINGEL_ENTRY_CATEGORY>}
        Then the bot responds with {<BOON_NAME>}
        Examples:
            | SINGEL_ENTRY_CATEGORY | BOON_NAME       |
            | attack                | Heaven Strike   |
            | special               | Heaven Flourish |
            | cast                  | Storm Ring      |
            | dash                  | Thunder Sprint  |
            | gain                  | Ionic Gain      |
            | infusion              | Air Quality     |

    Scenario: A user can ask about categories from a God that is missing a category
        When the user says to the bot {!<GOD>}
        And the bot responds with {[<EXPECTED_CATEGORY>]}
        Examples:
            | GOD     | EXPECTED_CATEGORY |
            | artemis | other             |
            | hermes  | infusion          |
            | hermes  | other             |





