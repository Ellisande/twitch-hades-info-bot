## Hades Info Bot

A twitch bot that answers questions about the video game Hades

### What is Hades?

Hades is an action rogue-like by SuperGiant games currently in early access. https://www.epicgames.com/store/en-US/product/hades/home

### Inviting Hades bot to your channel

The bot is still in limited release. If you would like to try it out there are two ways:

1. Contact me on Twitch ellisandepoet
2. Make a PR and add your channel to the `src/enabledChannels.js`

### Use at your own risk

I make no promises that bot will be stable, accurate, or bug free. If you invite the bot to your channel make sure you know how to ban it in case it starts acting in an un-intentional way.

### Contributing Data

I'm accepting PRs from any verified data about the game. God abilities, deadulus hammer, npcs, enemies, or whatever! Here are some things to know:

#### Contributing God Data

If you want to modify information about a God's abilities find the god in `src/data/gods/{godName}.js` and modify the file. Then create a PR. I'll help you update the tests!

Ability Schema:

```js
const ability = {
    name: "Name of the ability",
    type: ATTACK|SPECIAL|CAST|DASH|REVENGE|OTHER
    info: value => `message for the boss to respond with`
    values: {
        [RARITY]: {
            1: 'value at level 1',
            2: 'value at level 2'
        }
    }
}
```

#### Contributing to Weapon Data

If you want to modify information about a weapon go to `src/data/weapons.js` and just modify what you want!

#### Contributing anything else

I don't have templates built out for you yet! This is going to be more complex. If you are familiar with programming, feel free to create a PR! If not, its better to create an issue on this Github repo and I'll get to it when I can!
