const { requestData } = require('../utils.js');
const { url } = require('../config').markets.bittrex;

module.exports = async () => {
        const { result } = await requestData(url);

        return result;
};
