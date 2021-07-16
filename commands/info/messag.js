const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hi',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
aliases: [``, ``],
    run: async(client, message, args) => {

message.lineReply(`hello ${message.author}`);
    }
}