const { requestData } = require('../utils.js');
const { url } = require('../config').markets.bitfinex;

module.exports = () => requestData(url);
