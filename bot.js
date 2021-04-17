const {Telegraf} = require('telegraf')

const bot = new Telegraf('1784474668:AAG6DffL1G2VBkzzMH1X74ZEBQGsii9i8-Y')

bot.start(ctx => {
    ctx.reply('Welcome');
})

bot.launch()