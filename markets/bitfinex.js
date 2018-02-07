const { requestData } = require('../utils.js');
const { bitfinexUrl } = require('../config').marketUrls;

module.exports = () => requestData(bitfinexUrl);
