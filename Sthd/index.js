var irc = require("irc");

var config = {
	channels: ["#weeptest"],
	server: "efnet.portlane.se",
	botName: "SthdBot"
};


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

var options = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
]

// Listen for any message, say to him/her in the room
bot.addListener("message", function (from, to, text, message) {
	var m = text.match(/\.(decide|diag)\s+(.*)/i);
	if (m && m.length > 1) {
		console.log(arguments);
		var rand = Math.floor(Math.random() * options.length);
		var reply = options[rand];
		bot.say(config.channels[0], reply);
	}
});

var mods = ["weep","davve","pinne","tobbe"];
// Listen for joins
bot.addListener("join", function(channel, who) {
	if(mods.indexOf(who) != -1){
		bot.say(channel, "/mode +i " + who);
	}
});