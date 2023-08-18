const venom = require('venom-bot');
const express = require('express');
const http = require('http');
const fs = require('fs');
const {WebhookClient} = require('dialogflow-fulfillment');
const dialogflow = require('@google-cloud/dialogflow');
const app = require();
const port = process.env.PORT || 8000;
const server = http.createServer(app);

venom
    .create({
        headless: false,
        session: 'session-name' //name of session
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

app.post('/webhook', function(request, response) {
    const agent = new WebhookClient ({request, response});
        let intentMap = new Map();
        intentMap.set('nomedaintencao', nomedafuncao)
        agent.handleRequest(intentMap);
})