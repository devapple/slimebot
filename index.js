// devappler 5/16
// Start up :P
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = '!';
var version = 1.0;

bot.login(token);

bot.on('ready', () => {
    console.log('Bot active!');
    bot.user.setActivity('SlimeBot v1.0');
});


//basic commands
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) {

        case 'slime': // slime command
            message.reply('SlimeBot ready :D');
            break;

        case 'info': //info command
            if (args[1] === 'version') {
                message.channel.send('Version ' + version);
            } else {
                message.channel.send('Error: please specify a subcommand');
            }
            break;

        case 'author': //author command
            message.channel.send('SlimeBot was created by Devappler!');
            break;

        case 'clear': // clear command
            if (!args[1] || !message.member.roles.cache.find(r => r.name === "bot commander")) return message.channel.send('An internal error occured. You either dont have permission, or an invalid argument was given.')
            message.channel.bulkDelete(args[1]);
            console.log('Cleared ' + args[1] + ' messages in channel');
            break;

        case 'check':
            if (!message.member.roles.cache.find(r => r.name === "bot commander")) return message.channel.send('You dont have permission to perform that command.')
                message.channel.send('good')
            break;

        // rich embed
        case 'help':
            const embed = new Discord.MessageEmbed()
                .setTitle('Example Commands')
                .setColor(0xA569BD)
                .setThumbnail(message.author.displayAvatarURL())
                .addField('!Slime', 'Make sure our SlimeBot is ready')
                .addField('!Info', 'Use info <version> to check what version our bot is')
                .addField('!Author', 'Check to see who made SlimeBot')
                .addField('!Clear', 'Clear an amount of messages in a channel')
                message.channel.send(embed);
            break;
    }
})