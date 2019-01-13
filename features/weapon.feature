Feature: Users can get weapon information

    Scenario: Users can get sword information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!sword}
        Then the bot responds with {Stygius, the sword is the starting weapon in Hades. Fast short ranged attacks and player area of effect special. [attack] [special]}

    Scenario: Users can use the sword's name to get information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!stygius}
        Then the bot responds with {Stygius, the sword is the starting weapon in Hades. Fast short ranged attacks and player area of effect special. [attack] [special]}

    Scenario: User can get sword attack information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!sword attack}
        Then the bot responds with {Three hit melee combo. 10, 20, 30 damage}

    Scenario: User can get sword special information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!sword special}
        Then the bot responds with {50 damage in an area around Zagreus. Temporaily stuns Zag on use.}


    Scenario: Users can get spear information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!spear}
        Then the bot responds with {Varatha, the spear is the most expensive weapon. Very versatile with ranged attack and large aoe. [attack] [special]}

    Scenario: Users can use the spear's name to get information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!varatha}
        Then the bot responds with {Varatha, the spear is the most expensive weapon. Very versatile with ranged attack and large aoe. [attack] [special]}

    Scenario: User can get spear attack information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!spear attack}
        Then the bot responds with {15 damage. Charged: 50 damage ae damage around Zagreus}

    Scenario: User can get spear special information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!spear special}
        Then the bot responds with {20 damage ranged attack. Flies and out comes back. Does damage both ways.}

    Scenario: Users can get shield information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!shield}
        Then the bot responds with {Aegis, the shield is the 3rd unlocked weapon. It has good defense, but is very difficult. [attack] [special]}

    Scenario: Users can use the shield's name to get information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aegis}
        Then the bot responds with {Aegis, the shield is the 3rd unlocked weapon. It has good defense, but is very difficult. [attack] [special]}

    Scenario: User can get shield attack information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!shield attack}
        Then the bot responds with {20 damage. Charges a dash that does 50 damage}

    Scenario: User can get spear special information
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!shield special}
        Then the bot responds with {15 damage ranged attack that bounces twice}