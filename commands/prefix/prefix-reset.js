const prefixSchema = require('../../models/prefix')
const prefix = require('../../config.json').prefix
const { confirmation } = require('@reconlx/discord.js')

module.exports = {
    name : 'prefix-reset',
		aliases: ["reset-prefix", "resetprefix"],
    run : async(client, message) => {
			if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have Admin perms to use this command!")
    }
    prefixSchema.findOne({ Guild: member.guild.id}, async (err, data) => {
        if(!data) return message.channel.send('no custom prefix were setted for this GUILD')
        message.channel.send("Are you sure you want to reset the prefix?").then(async (msg) => {
            const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000)
            if(emoji === '✅') {
                msg.delete()
                await data.delete();
                message.channel.send(`:white_check_mark:  **Succes reset prefix to **\`${prefix}\``)
            }
            if(emoji === '❌') {
                msg.delete()
                message.channel.send('**reset prefix has been cancelled.**')
            }
        })
    })
    }
}