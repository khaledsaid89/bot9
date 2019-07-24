const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603543666618794015")
setInterval(function() {
channel.send(`Khaled el gamd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);