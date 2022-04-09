const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const sync_commands = require("discord.js-commands")

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  sync_commands(client, "commands")
})

client.login("token")
