const { requestData } = require('../utils.js');
const { binanceUrl } = require('../config').marketUrls;

module.exports = () => requestData(binanceUrl);
