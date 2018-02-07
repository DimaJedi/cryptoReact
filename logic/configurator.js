const bittrex = require('../markets/bittrex.js');
const bitfinex = require('../markets/bitfinex.js');
const binance = require('../markets/binance.js');
const kucoin = require('../markets/kucoin.js');
const huobi = require('../markets/huobi.js');
const comparator = require('./comparator');
const sendEmail = require('./send-email');
const sendTg = require('./send-telegram');

module.exports = (io) => {
    const listener = market => (notificationType, text) => {
        io.emit(notificationType, {
            market,
            text,
        });

        sendEmail('zhadkov@gmail.com', market, text);
        sendTg(notificationType, market, text);
    };

    comparator(2000, listener('Bittrex'), bittrex, 'Currency');
    comparator(15000, listener('Bitfinex'), bitfinex);
    comparator(2000, listener('Binance'), binance, 'symbol');
    comparator(2000, listener('Kucoin'), kucoin, 'coin');
    comparator(2000, listener('Huobi'), huobi);
};
