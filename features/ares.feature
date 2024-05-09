Feature: User can ask for information about Ares

    Scenario: User can ask for general information about Ares
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares}
        Then the bot responds with {Ares, God of War. His powers cause spinning clouds of blades or damaging curses. [attack] [special] [cast] [dash]] [other]}

    Scenario: User can ask for attack information about Ares
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares attack}
        Then the bot responds with {Curse of Agony (Attack) - Attacks deal (e:85) damage a short time later}

    Scenario: User can ask for special information about Ares
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares special}
        Then the bot responds with {Curse of Pain (Special) - Special deals (r:43 e:73) damage a short time later}

    Scenario: User can ask for dash information about Ares
        Given PENDING: need info
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares dash}
        Then the bot responds with {Hunter Dash (Dash) - Dash causes your attacks to critical for (r:1sec/2crits e:1sec/3crits)}

    Scenario: User can ask for cast information about Ares
        Given PENDING: need info
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares cast}
        Then the bot responds with {True Shot (Cast) - Cast seeks enemies and deals (e:149-179) damage}

    Scenario: User can ask for the names of other abilities for Ares
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares other}
        Then the bot responds with {Ares's other abilities:}
        And the bot responds with {[urge to kill]}

    Scenario: User can ask by name for urge to kill
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!ares urge to kill}
        Then the bot responds with {Urge to Kill (Other) - Attack and cast damage increased by (e:24%)}