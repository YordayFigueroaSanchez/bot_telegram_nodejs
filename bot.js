const {Telegraf} = require('telegraf')

const bot = new Telegraf('1784474668:AAG6DffL1G2VBkzzMH1X74ZEBQGsii9i8-Y')

bot.start((ctx) => {
    ctx.reply('Welcome');
})

bot.help((ctx) => {
    ctx.reply('Help !!.');
})

bot.settings((ctx) => {
    ctx.reply('Settings .');
})

bot.command(['comando','Comando','command','Command'],(ctx) => {
    ctx.reply('My command in use.');
})

bot.command(['aaa','bbb','ccc','ddd'],(ctx) => {
    ctx.reply('ABCD comando.');
})



bot.launch()