const { requestData } = require('../utils.js');
const { url } = require('../config').markets.kucoin;

module.exports = async () => {
        const { data } = await requestData(url);

        return data;
};
