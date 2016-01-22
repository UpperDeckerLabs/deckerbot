var Botkit = require('botkit');
var jokes = require('./jokes');
var controller = Botkit.slackbot();

var bot = controller.spawn({
  token: the_slack_integration_token
})

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }

});

controller.hears(['^yo mama (.*)'],'direct_message,direct_mention,mention,ambient',function(bot, message) {
    var matches = message.text.match(/yo mama (.*)/i);
    var name = matches[1];
    var joke = jokes.getFatJoke();
    bot.reply(message,name + '\'s mama is so fat ' + joke);
});

