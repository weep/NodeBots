var irc = require("irc");

var config = {
	channels: ["#sthd"],
	server: "efnet.portlane.se",
	botName: "SthdBot"
};


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels //,	debug: true
});

require("./Functions/AutoModerator")(bot);

// Listen for any message, say to him/her in the room
bot.addListener("message", function (from, to, text, message) {
	try{
		var match = text.match(/\.(\w+)\s*(.*)/i)
		if(match){
			var handler = require.resolve("./Functions/" + match[1] + ".js");
			require(handler)(bot, message, match[2]);
			delete require.cache[handler];
		}

	}
	catch(ex){
		console.log(ex.message);
	}
});
