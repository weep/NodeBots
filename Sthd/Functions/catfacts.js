module.exports = (bot, message, args) => {
    let http = require("http");
    let channel = message.args[0];
    http.get("http://catfacts-api.appspot.com/api/facts", function (res) {
        res.on("data", function (data) {
            let jsonObject = JSON.parse(data);
            bot.say(channel, jsonObject.facts[0]);
        })
    });
}
