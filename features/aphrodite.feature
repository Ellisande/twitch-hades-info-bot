Feature: User can ask for information about Aphrodite

    Scenario: User can ask for general information about Aphrodite
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite}
        Then the bot responds with {Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage}
        And the bot responds with {[attack] [special] [cast] [dash] [gain] [other]}

    Scenario: User can ask for attack information about Aphrodite
        Given PENDING: need info
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite attack}
        Then the bot responds with {Tempest Strike (Attack)}
        And the bot responds with {Attacks knock back enemies and deal and additional (r:45% e:66%) damage}

    Scenario: User can ask for special information about Aphrodite
        Given PENDING: need info
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite special}
        Then the bot responds with {Tempest Flourish (Special)}
        And the bot responds with {Special knocks back enemies and deals and additional (c:25% r:35%) damage}

    Scenario: User can ask for dash information about Aphrodite
        Given PENDING: need info
        And a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite dash}
        Then the bot responds with {Tidal Dash (Dash)}
        And the bot responds with {Dash knocks away nearby enemies and deals (r:32) damage}

    Scenario: User can ask for cast information about Aphrodite
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite cast}
        Then the bot responds with {Shatter Shot (Cast)}
        And the bot responds with {Cast shoots six short range projectiles that each deal (c:15) damage}

    Scenario: User can ask for gain information about Aphrodite
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite gain}
        Then the bot responds with {Glamour Gain (Aphrodite) [Air]}
        And the bot responds with {In each encounter, 1 foe is always Weak. You gradually restore (c:6 e:10) [mana]/second while near [weak] foes.}

    Scenario: User can ask for the names of other abilities for Aphrodite
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite other}
        Then the bot responds with {Aphrodite's other abilities:}
        And the bot responds with {[dying lament] [empty inside]}

    Scenario: User can ask by name for dying lament
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite dying lament}
        Then the bot responds with {Dying Lament (Other)}
        And the bot responds with {Killing an  enemy deals (r:15-18) damage to nearby enemies and applies weak}

    Scenario: User can ask by name for empty inside
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!aphrodite empty inside}
        Then the bot responds with {Empty Inside (Other)}
        And the bot responds with {Your weak effects last (e:5sec) longer}