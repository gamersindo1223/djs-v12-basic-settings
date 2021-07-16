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
const prefixSchema = require('./models/prefix');
client.prefix = async function(message) {
	let custom;

	const data = await prefixSchema
		.findOne({ Guild: message.guild.id })
		.catch(err => console.log(err));

	if (data) {
		custom = data.Prefix;
	} else {
		custom = prefix;
	}
	return custom;
};
require('./database/MongoDb')
require('discord-reply');
client.login(process.env.TOKEN);