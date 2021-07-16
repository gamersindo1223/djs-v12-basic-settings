const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
aliases: [``, ``],
    run: async(client, message, args) => {

const embed = new MessageEmbed()
.setTitle('hello')
.setDescription('this is a embed')
.setTimestamp()
.setColor('Aqua')
message.lineReply('embed', embed);

    }
}