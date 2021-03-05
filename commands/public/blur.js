const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require('discord-image-generation')
module.exports = {
    name: 'blur',
    description: 'Affect',
    aliases: [''],
    usage: '(mention)',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        if(member.bot) return message.channel.send(`This command only for members.`)
        // Make the image
        let img = await new DIG.Blur().getImage(`${member.avatarURL({ dynamic: false, format: 'png' })}`, '1');        
        // Add the image as an attachement
        let attach = new MessageAttachment(img, "blur.png");;
        message.channel.send(attach)
    }
}