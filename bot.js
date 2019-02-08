const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '='; //Введите любой префикс (команда будет, например, такая - (префикс)spam
const token = ""; //Вставьте ваш токен
const lox = "Декс"; //Введите имя или никнейм лоха
const loxeng = "dex"; //Введите имя или никнейм лоха на английском
/* Команды
(префикс)spam сообщение - Поспамить лоху.
(префикс)spamdm сообщение - Поспамить лоху в ЛС.
(префикс)uebatsa - Сбежать, пока лох не забанил :).
(префикс)(имя лоха на английском)lox - Наспамить, что он лох.
(префикс)nelox - Бот сделает так, что он не лох.
*/
client.on('ready', () => {
    client.user.setActivity(`О! Привет, ${lox}!`,{ type: 'PLAYING' });
    console.log(`Запущен.`/* Сервера: ${client.guilds.size}`*/);
})

client.on('message', message => {
    if (message.channel.type !== 'text' || message.author.bot || !message.content.startsWith(prefix) || !message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === 'spam') {
let text = args.join(' ');
message.delete(1);
for (let i = 0; i < 1000; i++) message.channel.send(`${text}`);
}
if(command === 'uebatsa'){
message.delete(1);
message.guild.leave();
}
if(command === `${loxeng}lox`){
message.delete(1);
client.user.setActivity(`За ${lox}ом`,{ type: 'WATCHING' });
for (let i = 0; i < 1000; i++) message.channel.send(`Вот это ${lox} лох`);
}
if(command === 'spamdm'){
const owner = client.users.get(message.guild.ownerID);
client.user.setActivity(`За ${lox}ом`,{ type: 'WATCHING' });
for (let i = 0; i < 1000; i++) owner.send(`${args.join(' ')}`);
}
if(command === 'nelox'){
client.user.setActivity(`О! Привет, ${lox}!`,{ type: 'PLAYING' });
}
});
client.login(`${token}`);
//client.login(process.env.BOT_TOKEN);
