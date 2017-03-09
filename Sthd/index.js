const irc = require("irc");

const config = {
	channels: ["#sthd"],
	server: "efnet.portlane.se",
	botName: "SthdBot"
};


// Create the bot name
const bot = new irc.Client(config.server, config.botName, {
	channels: config.channels //,	debug: true
});

require("./Functions/AutoModerator")(bot);

// Listen for any message, say to him/her in the room
bot.addListener("message", function (from, to, text, message) {
	try{
		let match = text.match(/^\.(\w+)\s*(.*)/i)
		if(match){
			let handler = require.resolve("./Functions/" + match[1] + ".js");
			require(handler)(bot, message, match[2]);
			delete require.cache[handler];
		}

	}
	catch(ex){
		console.log(ex.message);
	}
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});