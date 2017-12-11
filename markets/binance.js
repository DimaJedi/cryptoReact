const { getCurrencies } = require('../utils.js');
const { binanceUrl } = require('../constants.js');

module.exports = () => getCurrencies(binanceUrl);
