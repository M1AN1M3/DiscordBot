const Discord = require(`discord.js`);


//what is run
module.exports.run = async (bot, message, args) => {
    message.channel.send(`pong`)
}

//any other required information (in this canse; name)
module.exports.help = {
    name: `ping`  
};          
