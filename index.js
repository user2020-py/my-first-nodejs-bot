const TelegramBot = require('node-telegram-bot-api');
const token = '5427019751:AAHqMjdYssKphv-74AWuyE7x-25_V_9QgMQ';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello World!");
});