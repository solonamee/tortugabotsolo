const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**hop bi pro yakalım**").then(msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.delete(`**SİGARAM BİTTİ ALİ USTAAA**`);
                        }, 6000);
                    });
                };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yakyak",
  description: "Sizin için bir sigara yakar.",
  usage: "yakyak"
};