const fs = require('fs')
const commands = new Map()

const handler = async (client, path) => {
  for (let commandFile of fs.readdirSync(`./${path}`)) {
    let File = require(`${process.cwd()}/${path}/${commandFile}`)

    commands.set(File.name, File)
  }
  
  await client.readyAt ? Promise.resolve() : new Promise(resolve => client.once('ready', resolve))
  
  client.guilds.cache.forEach(async guild => {
    await guild.commands.fetch().then(() => {
      commands.forEach(Command => {
        if (Command.guild == guild.id) {
          guild.commands.create({
            name: Command.name,
            description: Command.description,
            options: Command.options
          })
        } else {
          guild.commands.create({
            name: Command.name,
            description: Command.description,
            options: Command.options
          })
        }
      })
    
      guild.commands.cache.forEach(Command => {
        if (!Array.from(commands.keys()).includes(Command.name)) {
          guild.commands.delete(Command.id)
        }
      })
    })
  })

  client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
      const command = commands.get(interaction.command.name)
      const { options } = Interaction
      
      try {
        command.execute(client, interaction, options)
      } catch (e) {
        console.error(e)
      }
    }
  })
}

module.exports = handler

handler(1, 'commands')