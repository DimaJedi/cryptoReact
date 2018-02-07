const { requestData } = require('../utils.js');
const { bittrexUrl } = require('../config').marketUrls;

module.exports = async () => {
        const { result } = await requestData(bittrexUrl);

        return result;
};
