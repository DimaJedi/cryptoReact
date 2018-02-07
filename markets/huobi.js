const { requestData } = require('../utils.js');
const { kucoinUrl } = require('../config').marketUrls;

module.exports = async () => {
        const { data } = await requestData(kucoinUrl);

        return data;
};
