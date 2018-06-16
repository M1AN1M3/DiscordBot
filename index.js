const botconfig = require('./config.json');
const tokenfile = require('./token.json');
const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection

fs.readdir("./Commands/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if(jsfiles.length <= 0) {
        console.log('No commands to load');
        return;
    };

    console.log(`loading ${jsfiles.length} commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./Commands/${f}`);
        console.log(i + 1);
        client.commands.set(props.help.name, props);
    });
});






client.on("ready", async message => {
/*
for (i = 0; i < commandsFile.length; i++) {
  let currentFile = commandsFile[i]
  if (currentFile.match(/\.js$/)){
    client.commands = client.commands + currentFile
    console.log(client.commands)
}
}
*/
console.log(`The Bot Is Online`);
});





client.on(`message`, async message => {
    if(message.author.bot) return;

    message.content.toLowerCase

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let command = messageArray[0]
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});











client.login(tokenfile.token);
