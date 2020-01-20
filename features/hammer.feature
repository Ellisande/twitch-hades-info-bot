Feature: Ask the bot about deadulus hammer abilities

    Scenario: User can ask about general hammer info
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!hammer}
        Then the bot responds with {Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run.}
        And the bot responds with {[sword] [shield] [gun] [spear] [bow]}

    Scenario: User can ask about daedalus info
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!daedalus}
        Then the bot responds with {Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run.}
        And the bot responds with {[sword] [shield] [gun] [spear] [bow]}

    Scenario: User can ask about daedalus hammer info
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!daedalus hammer}
        Then the bot responds with {Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run.}
        And the bot responds with {[sword] [shield] [gun] [spear] [bow]}

    Scenario: User can ask about sword daedalus hammer upgrades
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!hammer sword}
        Then the bot responds with {Sword hammer upgrades:}
        And the bot responds with {[world splitter] [flurry slash] [super nova] [double nova] [double edge] [armor slayer] [cruel thrust] [piercing wave]}


    Scenario: User can ask about flurry slash
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!flurry slash}
        Then the bot responds with {Flurry Slash (Sword) - Hold Attack to strike rapidly, dealing 25 base damage per hit.}
        And the bot responds with {Mutually exclusive:}
        And the bot responds with {[world splitter] [cruel thrust]}

    Scenario: User can ask about exploding launcher
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!exploding launcher}
        Then the bot responds with {Exploding Launcher (Spear) - Your Special is replaced with a shot that deals 60 damage in an area.}
        And the bot responds with {Mutually exclusive:}
        And the bot responds with {[achilles aspect] [vicious skewer] [multi skewer]}

    Scenario: User can ask about piercing barrage
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!piercing barrage}
        Then the bot responds with {Piercing Barrage (Bow) - Your Special pierces foes and deals +100% damage to armor.}
        And the bot responds with {Mutually exclusive:}
        And the bot responds with {[chrion aspect]}

    Scenario: User can ask about dread flight
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!dread flight}
        Then the bot responds with {Dread Flight (Shield) - Your Special can hit up to 6 foes before returning.}
        And the bot responds with {Mutually exclusive:}
        And the bot responds with {[zeus aspect]}

    Scenario: User can ask about rocket bomb
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!rocket bomb}
        Then the bot responds with {Rocket Bomb (Gun) - Your Special is replaced with a rocket that deals 80 base damage.}