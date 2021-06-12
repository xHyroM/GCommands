module.exports = {
    resolveString(data) {
        if (typeof data === 'string') return data;
        if (Array.isArray(data)) return data.join('\n');
        return String(data);
    },

    /**
     * Internal method to createAPIMessage
     * @returns {object}
    */
     async createAPIMessage(interaction, content) {
        const apiMessage = await APIMessage.create(this.client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
        
        return { ...apiMessage.data, files: apiMessage.files };
    }
}