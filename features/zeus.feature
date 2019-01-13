Feature: User can ask for information about Zeus

    Scenario: User can ask for general information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus}
        Then the bot responds with {Zeus, God of Thunder. His powers create bouncing lightning projectiles. [attack] [special] [cast] [dash] [revenge] [other]}

    Scenario: User can ask for attack information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus attack}
        Then the bot responds with {Thunder Strike (Attack) - Attacks creates chain lightning that does (r:15 e:21) damage}

    Scenario: User can ask for special information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus special}
        Then the bot responds with {Thunder Flourish (Special) - Special causes a chain lightning bolt that deals (r:15-16 e:29) damage}

    Scenario: User can ask for dash information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus dash}
        Then the bot responds with {Thunder Dash (Dash) - Dash strikes nearby targets for (e:42-54) damage}

    Scenario: User can ask for cast information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus cast}
        Then the bot responds with {Electric Shot (Cast) - Cast bounces and deals (c:60 r:84-86 e:122) damage}

    Scenario: User can ask for revenge information about Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus revenge}
        Then the bot responds with {Heaven's Vengeance (Revenge) - Taking damage strikes nearby enemies for (e:151-173) damage}

    Scenario: User can ask for the names of other abilities for Zeus
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus other}
        Then the bot responds with {Zeus's other abilities: [storm lightning] [splitting bolt]}

    Scenario: User can ask by name for storm lightning
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus storm lightning}
        Then the bot responds with {Storm Lightning (Other) - Your chain lightning bounces an additional (c:2 r:4) times}

    Scenario: User can ask by name for splitting bolt
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!zeus splitting bolt}
        Then the bot responds with {Splitting Bolt (Other) - Your lightning effects create an extra projectile that deals (l:40) damage}