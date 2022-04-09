# discord.js-commands
## About 
A package to Sync your bot's Slash Commands and manage interactions

- Slash Commands handler
- Fast register Slash Commands
- Auto deleting Slash Commands

## Exemple Usage

Instaling discord.js-commands

```sh-session
npm i discord.js-commands
```

index.js (exemple)

```js
const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const sync_commands = require("discord.js-commands")

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  sync_commands(client, (commands folder name) exp => "commands")
})

client.login("token")```
