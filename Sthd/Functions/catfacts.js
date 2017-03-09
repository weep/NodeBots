var http = require("http");

module.exports = (bot, message, args) => {
    http.get("http://catfacts-api.appspot.com/api/facts", function (res) {
        res.on("data", function (data) {
            var jsonObject = JSON.parse(data);
            bot.say(message.args[0], jsonObject.facts[0]);
        })
    });
}
