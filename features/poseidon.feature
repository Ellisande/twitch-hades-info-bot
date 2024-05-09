Feature: User can ask for information about Poseidon

    Scenario: User can ask for general information about Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon}
        Then the bot responds with {Poseidon, God of the Sea. His powers knock enemies away.}
        And the bot responds with {[attack] [special] [cast] [dash] [other]}

    Scenario: User can ask for attack information about Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon attack}
        Then the bot responds with {Tempest Strike (Attack)}
        And the bot responds with {Attacks knock back enemies and deal and additional (r:45% e:66%) damage}

    Scenario: User can ask for special information about Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon special}
        Then the bot responds with {Tempest Flourish (Special)}
        And the bot responds with {Special knocks back enemies and deals and additional (c:25% r:35%) damage}

    Scenario: User can ask for dash information about Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon dash}
        Then the bot responds with {Tidal Dash (Dash)}
        And the bot responds with {Dash knocks away nearby enemies and deals (r:32) damage}

    Scenario: User can ask for cast information about Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon cast}
        Then the bot responds with {Storm Shot (Cast)}
        And the bot responds with {Cast deals (r:77-79) damage in an area and knocks enemies back}

    Scenario: User can ask for the names of other abilities for Poseidon
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon other}
        Then the bot responds with {Poseidon's other abilities:}
        And the bot responds with {[typhoon's fury] [sunken treasure]}

    Scenario: User can ask by name for typhoon's fury
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon typhoons fury}
        Then the bot responds with {Typhoon's Fury (Other)}
        And the bot responds with {}

    Scenario: User can ask by name for sunken treasure
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!poseidon sunken treasure}
        Then the bot responds with {Sunken Treasure (Other)}
        And the bot responds with {Gain money, darkness, and health}