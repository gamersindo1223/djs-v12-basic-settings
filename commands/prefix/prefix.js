const prefixSchema = require('../../models/prefix')
const { Message } = require('discord.js')
module.exports = {
    name : 'prefix',
		aliases: ["setprefix", "set-prefix"],
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
			if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have Admin perms to use this command!")
    }
        const res = await args.join(" ")
        if(!res) return message.channel.send('Please specify a prefix to change to.')
        prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
            if(err) throw err;

      if(data)  return data.delete(); 
      new Schema({
            Guild : message.guild.id,
            Prefix : res
       }).save();
                message.channel.send(`**Custom prefix in this server is now set to **\`${res}\``)
            
        })
    }
}