Feature: User can ask for information about Artemis

    Scenario: User can ask for general information about Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis}
        Then the bot responds with {Artemis, Goddess of the Hunt. Her powers cause critical hits and create seeking projectiles. [attack] [special] [cast] [dash] [other]}

    Scenario: User can ask for attack information about Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis attack}
        Then the bot responds with {Deadly Strike (Attack) - Attacks have (r:50%) chance to crit}

    Scenario: User can ask for special information about Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis special}
        Then the bot responds with {Deadly Flourish (Special) - Special has a (r:60% e:68%) chance to crit}

    Scenario: User can ask for dash information about Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis dash}
        Then the bot responds with {Hunter Dash (Dash) - Dash causes your attacks to critical for (r:1sec/2crits e:1sec/3crits)}

    Scenario: User can ask for cast information about Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis cast}
        Then the bot responds with {True Shot (Cast) - Cast seeks enemies and deals (e:149-179) damage}

    Scenario: User can ask for the names of other abilities for Artemis
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis other}
        Then the bot responds with {Artemis's other abilities: [pressure points] [quick reload] [fully loaded]}

    Scenario: User can ask by name for pressure points
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis pressure points}
        Then the bot responds with {Pressure Points (Other) - All sources damage has (c:10% e:24%) chance to crit}

    Scenario: User can ask by name for quick reload
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis quick reload}
        Then the bot responds with {Quick Reload (Other) - Enemies drop casts (e:1.9s-1.97s) faster}

    Scenario: User can ask by name for fully loaded
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis fully loaded}
        Then the bot responds with {Fully Loaded (Other) - Cast has (r:1) additional charges}


    Scenario: User can ask by name for hide breaker
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!artemis hide breaker}
        Then the bot responds with {Hide Breaker (Other) - Critical hits deal and additional (e:231%) damage to armor}