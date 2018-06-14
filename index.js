const botconfig = require('./config.json');
const tokenfile = require('./token.json');
const Discord = require('discord.js');
const fs = require("fs");
const kick = require("./commands/kick.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection
const commandsFile = fs.readdirSync('./commands')






client.on("ready", async () => {

for (i = 0; i < commandsFile.length; i++) {
  let currentFile = commandsFile[i]
  if (currentFile.match(/\.js$/)){
    client.commands = client.commands + currentFile
    console.log(client.commands)

}
}
});





client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.splice(1);
});











client.login(tokenfile.token);
