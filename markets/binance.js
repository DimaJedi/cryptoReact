const { requestData } = require('../utils.js');
const { binanceUrl } = require('../constants.js');

module.exports = () => requestData(binanceUrl);
