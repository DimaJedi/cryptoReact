const { requestData } = require('../utils.js');
const { url } = require('../config').markets.binance;

module.exports = () => requestData(url);
