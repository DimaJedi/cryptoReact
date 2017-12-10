const { getCurrencies } = require('../utils.js');
const { bitfinexUrl } = require('../constants.js');

module.exports = () => getCurrencies(bitfinexUrl);
