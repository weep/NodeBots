const mods = ["weep", "davve", "pinne", "tobbe"];

module.exports = (bot) => {
    // Listen for joins
    bot.addListener("join", function (channel, who) {
        if (mods.indexOf(who) != -1) {
            try {
                // bot.action(channel, "MODE +o " + who)
                bot.send("MODE", channel, "+o", who);
            }
            catch (ex) {
                bot.say(channel, ex.message)
            }
        }
    });
}