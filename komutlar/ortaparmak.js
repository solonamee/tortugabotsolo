const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Orta Parmak ğŸ–•ğŸ–•ğŸ–•   \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setFooter('Tortuga Bot ')
  .setImage("https://images-ext-2.discordapp.net/external/d-QM81zaQpGZAC1TJOM_BkvgvxdsQAeWxig3IyQ2_eI/https/img-s2.onedio.com/id-571d7e82d12fbe2b6494cd3b/rev-0/w-500/s-aeb4761f4d7ccc7cf294898a03c27167bb395f73.gif")
  .setImage("https://media.giphy.com/media/QGzPdYCcBbbZm/giphy.gif")
  .setImage("https://media.giphy.com/media/NBN2nFCVQDCDe/giphy.gif")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ortaparmak',
  description: 'Dene Ve GÃ¶r',
  usage: 'ortaparmak'
};