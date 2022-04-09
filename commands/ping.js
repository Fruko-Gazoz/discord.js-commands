module.exports = {
  name: "ping",
  description: "Replies with Pong!",
  execute (client, interaction, options) {
    interaction.reply("Pong!")
  }
}
