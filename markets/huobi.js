const { requestData } = require('../utils.js');
const { url } = require('../config').markets.huobi;

module.exports = async () => {
        const { data } = await requestData(url);

        return data;
};
