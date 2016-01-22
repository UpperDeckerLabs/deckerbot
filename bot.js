var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: the_slack_integration_token
})
bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }

});
controller.hears(['yo mama (.*)'],'direct_message,direct_mention,mention,ambient',function(bot, message) {
    var matches = message.text.match(/yo mama (.*)/i);
    var name = matches[1];

    bot.reply(message,name + '\'s mama is so bald you can see whats on her mind');
});

