const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Avatarın!  \n")


  .setColor("RANDOM")
  .addField('Şu Kullanıcının Avatarı : ', message.author.username + '#' + message.author.discriminator)
  .setImage(message.author.avatarURL)
  .setFooter("Avatar Sistemi", " ")

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı Atar.',
  usage: 'avatar'
};