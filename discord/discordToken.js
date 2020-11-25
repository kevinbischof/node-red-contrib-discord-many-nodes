module.exports = function(RED) {
    function DiscordTokenNode(config) {
        RED.nodes.createNode(this,config);
        this.token = this.credentials.token;
        this.name = n.name;
    }
    RED.nodes.registerType("discordToken",DiscordTokenNode, {
        credentials: {
            token: {type:"text"}
        }
    });
};
