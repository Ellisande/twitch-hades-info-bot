Feature: Users can request information about infusions
    Background:
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: Users can request a Chaos combo
        When the user says to the bot {!addled blood}
        Then the bot responds with {For the next 3-5 Encounters, each time you use your Cast, get hit for 3-6 damage}
        And the bot responds with {Afterward, whenever you exit a Location, restore (c:3-4 r:9-12 e:15-20 h:21-28) health.}

    Scenario: Users can request a curse and blessing with percentages
        When the user says to the bot {!excruciating chasm}
        Then the bot responds with {For the next 3-5 Encounters, you take 20%-50% increased damage.}
        And the bot responds with {Afterward, your Casts deal (c:20%-50% r:30%-75% e:40%-100% h:50%-125%) more damage.}

    Scenario: Users can request a curse with special characters
        When the user says to the bot {!pauper's blood}
        Then the bot responds with {For the next 3-5 Encounters, you cannot earn money.}

    Scenario: Users can request a curse with alternate duration and no value
        When the user says to the bot {!rejected blood}
        Then the bot responds with {Your next 2-4 Boons you find will have 1 fewer blessing to choose from.}

    Scenario: Users can request the legendary blessing
        When the user says to the bot {!addled defiance}
        Then the bot responds with {Afterward, gain (l:1) uses of Death Defiance this night.}

    Scenario: Users can request a Chaos combo with alternate case
        When the user says to the bot {!AdDlEd bLooD}
        Then the bot responds with {For the next 3-5 Encounters, each time you use your Cast, get hit for 3-6 damage}
        And the bot responds with {Afterward, whenever you exit a Location, restore (c:3-4 r:9-12 e:15-20 h:21-28) health.}
