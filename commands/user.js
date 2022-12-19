const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user."),
    async execute(interaction) {
        // interaction.user = the user who ran the command
        // interaction.member = the GuildMember object, representing the user in the specific guild
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};