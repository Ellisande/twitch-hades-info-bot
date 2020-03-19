Feature: Users can ask about effects

    Scenario: User can ask about weakness
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!weak}
        Then the bot responds with {Enemies with weak deal 30% less damage. Lasts 3 seconds.}
        And the bot responds with {[status]}

    Scenario: User can ask about hard labor
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!hard labor}
        Then the bot responds with {Hard Labor}
        And the bot responds with {All ranks increase foes damage by 20%}
        And the bot responds with {5 ranks}
        And the bot responds with {1 heat per rank}
        And the bot responds with {5 heat - 100% maximum increase}
        And the bot responds with {(pact modifier)}

    Scenario: User can ask about fated authority
        Given a user {user1}
        And a channel {sneakyteak}
        When the user says to the bot {!fated authority}
        Then the bot responds with {Fated Authority}
        And the bot responds with {Each rank gives you 1 choice, used to randomly alter the reward for the next room. 10 choices maximum.}
        And the bot responds with {10 ranks}
        And the bot responds with {115500 darkness to max}
        And the bot responds with {[fated persuasion]}
        And the bot responds with {(mirror talent)}
