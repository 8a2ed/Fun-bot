const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Say something',
    aliases: [''],
    usage: '<mention channel> <anything>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        const content = message.content.split(' ').slice(2).join(' ')

        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send({
            embed: new MessageEmbed()
                .setDescription(`You don't have premission to use this command.`)
        })
        
        if (!channel) return message.channel.send({
            embed: new MessageEmbed()
                .setDescription(`Please enter a valid channel.
            EX: .say #general Hello`)
        })
        
        if (!content) return message.channel.send({
            embed: new MessageEmbed()
                .setDescription(`Please enter something to say.
            EX: .say #general Hello`)
        })
        message.react(`✅`)
        channel.send({
            embed: new MessageEmbed()
                .setColor(`BLACK`)
                .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
                .setDescription(content)
                .setTimestamp()
                .setFooter(`Guild: ${message.guild.name}`)
        })
    }
}