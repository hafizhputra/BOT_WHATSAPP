const { Client } = require('whatsapp-web.js');
var qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr,{small:true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// contoh pesan 
client.on('message', msg => {
    if (msg.body == '  ') { // pesan dari user
        msg.reply('  '); // pesan dari bot
    }
});






client.initialize();
