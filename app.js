const venom = require('venom-bot');
const telegram = require('telegram-bot-api');

const BOT_TOKEN = process.env.BOT_TOKEN
if (BOT_TOKEN) {
    console.log('Opps, you need to define your TG BOOT_TOKEN');
}

const api = new Target({
    token: '6626543866:AAEDVDVB1H77cBc8jC2UmWz_O7Qx8DIJHjU'
})

api.setMessagemProvider(new telegram.GetUpdatemessagesProvider())
api.start()
    .the(() => {
        console.log('TG API  is started');
    })
    .catch(console.err)

venom
    .create({ headless: false })
    .then((client) => start(client))
    .catch((error) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
        if (message.body.startsWith('!tgimagem ')) {
            const args = message.body.slice(10).split(' ');
            const tgId = args[0].includes('@') ? args[0] : `@${args[0]}`;
            // Send Photo
            api.sendPhoto({
                chat_id: tgId,
                caption: tgId,
                photo: args[1]
            })
            client.sendText(message.from, 'Enviando imagem para o canal: ' + tgId + '' + args[1])
        }
        if (message.body.startsWith('!tgassunto ')) {
            let tgId = message.body.split(' ')[1];
            let messageIndex = message.body.indexOf(tgId) + tgId.length;
            let tgTitle = message.body.slice(messageIndex, message.body.length);
            tgId = tgId.includes('@') ? tgId : `@${tgId}`;
            api.setChatTitle({
                chat_id: tgId,
                title: tgTitle
            })
            client.sendText(message.from, 'Trocando titulo do Telegram: ' + tgId)
        }
        if (message.body.startsWith('!tgmsg ')) {
            let tgId = message.body.split(' ')[1];
            let messageIndex = message.body.indexOf(tgId) + tgId.length;
            let msg = message.body.slice(messageIndex, message.body.length);
            tgId = tgId.includes('@') ? tgId : `@${tgId}`;
            // Send text message
            api.sendTextMessage({
                chat_id: tgId,
                text: msg
            })
            client.sendText(message.from, 'Enviando mensgem para o canal: ' + tgId)
        }
    });
}