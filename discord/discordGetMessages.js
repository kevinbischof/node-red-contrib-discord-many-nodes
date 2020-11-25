module.exports = function(RED) {

    const Discord = require('discord.js');
    const client = new Discord.Client();

    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var token = RED.nodes.getNode(config.token);

        node.on('input', function(msg) {

            //Set node status aktive
            node.status({fill:"green", shape:"dot", text:"ready"});

            client.on('ready', () => {
                console.log(`Logged in as ${client.user.tag}!`)
            });

            client.on('message', message => {
                msg.payload = message.toString();
                node.send(msg);
            });

            client.login(token);
        });
    }
    RED.nodes.registerType("discordGetMessages",LowerCaseNode);
};
