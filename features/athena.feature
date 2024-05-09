Feature: User can ask for information about Athena

    Scenario: User can ask for general information about Athena
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena}
        Then the bot responds with {Athena, Goddess of Wisdom. Her powers deflect attacks. [attack] [special] [cast] [dash] [other]}

    Scenario: User can ask for attack information about Athena
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena attack}
        Then the bot responds with {Divine Strike (Attack) - Attacks can deflect and deals (r:53%) increased damage}

    Scenario: User can ask for special information about Athena
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena special}
        Then the bot responds with {Divine Flourish (Special) - Special deflects and deals (c:60% r:83%-88% e:128%) increased damage}

    Scenario: User can ask for dash information about Athena
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena dash}
        Then the bot responds with {Titan Toppler (Dash) - Your dash is now slower but deals (e:30) and deflects}

    Scenario: User can ask for cast information about Athena
        Given PENDING: need information
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena cast}
        Then the bot responds with {Titan Toppler (Dash) - Your dash is now slower but deals (e:30) and deflects}

    Scenario: User can ask for the names of other abilities for Athena
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena other}
        Then the bot responds with {Athena's other abilities: [sure footing] [bronze skin]}

    Scenario: User can ask by name for bronze skin
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena bronze skin}
        Then the bot responds with {Bronze Skin (Other) - Reduce damage you take by (r:10%)}

    Scenario: User can ask by name for sure footing
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!athena sure footing}
        Then the bot responds with {Sure Footing (Other) - You take (e:53%) less damage from traps}