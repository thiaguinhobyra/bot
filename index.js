// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const {WebhookClient} = require('dialogflow-fulfillment');
const dialogflow = require('@google-cloud/dialogflow');
const app = require();
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
const server = http.createServer(app);
const util = require('util');
const {struct} = require('pb-util');

venom
    .create({
        headless: false,
        session: 'session-name' //name of session
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
        if (message.body != ' ' && message.isGroupMsg === false) {
            console.log('message',message.to);
            const number = message.to
            const ddi = number.slice(0,2)
            const ddd = number.slice(2,2)
            const fone = number.slice(4,9)
            console.log(number);
            const poll = {
                name: 'aceita?',
                options: [
                    {
                        name: 'Sim'
                    },
                    {
                        name: 'Não'
                    }
                ],
                selectableOptionsCount: 1
            };
             client.sendPollCreation(ddd+fone, poll)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
                
        }
    });
}

// // Supports ES6
// // import { create, Whatsapp } from 'venom-bot';
// const { append } = require('cheerio/lib/api/manipulation');
// const venom = require('venom-bot');

// venom
//     .create({
//         session: 'session-name' //name of session
//     })
//     .then((client) => start(client))
//     .catch((erro) => {
//         console.log(erro);
//     });

// function start(client) {
//     // app.post('send-message', [
//     //     body('number').notEmpty(),
//     //     body('message').notEmpty(),
//     // ], async (req, res) => {
//     //     const errors = validationResult(req).formatWith(({
//     //         msg
//     //     }) => {
//     //         return msg;
//     //     });

//     //     if (!errors.isEmpty()) {
//     //         return res.status(422).json({
//     //             status: false,
//     //             message: errors.mapped()
//     //         });
//     //     }
//     //     const number = req.body.number;
//     //     const message = req.body.message;

//     //     client.sendText(number, message).then(response => {
//     //         res.status(200).json({
//     //             status: true,
//     //             message: 'Mensagem enviada',
//     //             response: response
//     //         });
//     //     }).catch(err => {
//     //         res.status(500).json({
//     //             status: false,
//     //             message: 'Mensagem não enviada',
//     //             response: err.text
//     //         });
//     //     });
//     // })
//     client.onMessage((message) => {
//         console.log(message);
//         if (message.body != ' ' && message.isGroupMsg === false) {
//             client
//                 .sendText(message.from, 'Boa tarde! 🕷')
//                 .then((result) => {
//                     console.log('Result: ', result); //return object success
//                 })
//                 .catch((erro) => {
//                     console.error('Error when sending: ', erro); //return object error
//                 });
//         }
//     });
// }