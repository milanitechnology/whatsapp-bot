const qrcode = require('qrcode-terminal');
const { Client, LocalAuth} = require('./index');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: false,
        args: ['--no-sandbox'],
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
	if(message.body === 'oi') {
        sleep(1000);
		message.reply('Olá, tudo bem com você? No que posso ajudar? 😃');
	}
});