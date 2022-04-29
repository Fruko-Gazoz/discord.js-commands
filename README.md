# discord.js-commands-handler
## About 
A package to Sync your bot's Slash Commands and manage interactions

- Quickly registers new Slash Commands
- Auto deletes deleted Slash Commands
- Managing Interactions

## Example Usage

Instaling discord.js-commands-handler

```sh-session
npm i discord.js-commands-handler
```

index.js (exemple)

```js
const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const sync_commands = require("discord.js-commands-handler")

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  sync_commands(client, "commands")
})

client.login("token")
```

command file (commands/ping.js)

```js
module.exports = {
  name: "ping",
  description: "Replies with Pong!",
//options: [] => interaction options (optional),
//guild: "" => guild id (optional),
  execute (client, interaction, options) {
    interaction.reply('Pong!')
  }
}
```
