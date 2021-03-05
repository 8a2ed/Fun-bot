const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require('discord-image-generation')
module.exports = {
    name: 'gay',
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
        let img = await new DIG.Gay().getImage(`${member.avatarURL({ dynamic: false, format: 'png' })}`);        
        // Add the image as an attachement
        let attach = new MessageAttachment(img, "gay.png");;
        message.channel.send(attach)
    }
}