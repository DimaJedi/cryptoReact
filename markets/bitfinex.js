const { requestData } = require('../utils.js');
const { bitfinexUrl } = require('../constants.js');

module.exports = () => requestData(bitfinexUrl);
