module.exports = function(RED) {

    const Discord = require('discord.js');
    const client = new Discord.Client();

    function DiscordGetMessages(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var token = RED.nodes.getNode(config.token);

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`)
        });

        client.login(token);

        client.on('message', message => {
            message.channel.send('nachricht');
        });

        node.on('input', function(msg) {

            //Set node status aktive
            node.status({fill:"green", shape:"dot", text:"ready"});


        });
    }
    RED.nodes.registerType("discordGetMessages",DiscordGetMessages);
};
