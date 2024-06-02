Feature: Users can ask about the bonus boon givers in each act

    Background: Channel and user
        Given a user {user1}
        And a channel {sneakyteak}

    Scenario: A user can ask about icarus
        When the user says to the bot {!icarus}
        Then the bot responds with {The shade of a child who once flew too close to the sun, Icarus now helps fight the against Chronos's forces. Bonus boon giver on the surface.}

    Scenario: When a user asks about an act bonus all the bonus boons should be listed
        When the user says to the bot {!icarus}
        Then the bot responds with {[destructive coating] [protective coating] [hazard boom] [ingenious strike] [ingenious flourish] [explosive intent] [supply chain]}
