const bittrex = require('../markets/bittrex.js');
const bitfinex = require('../markets/bitfinex.js');
const binance = require('../markets/binance.js');
const comparator = require('./comparator');
const sendEmail = require('./send-email');

module.exports = (io) => {
    const listener = market => (notificationType, text) => {
        io.emit(notificationType, {
            market,
            text,
        });

        if (notificationType === 'notification') {
            sendEmail('zhadkov@gmail.com', market, text);
        }
    };

    comparator(2000, listener('Bittrex'), bittrex, 'Currency');
    comparator(15000, listener('Bitfinex'), bitfinex);
    comparator(2000, listener('Binance'), binance, 'symbol');
};
