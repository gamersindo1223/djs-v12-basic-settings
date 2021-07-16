const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('dotenv').config;
const path = require('path')
const fs = require('fs')
const config = require('config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('commands'));
["command"].forEach(handler => {
    require(path.resolve(`handlers/${handler}`))(client);
}); 

client.login(process.env.TOKEN);