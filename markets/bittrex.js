const { requestData } = require('../utils.js');
const { bittrexUrl } = require('../constants.js');

module.exports = async () => {
        const { result } = await requestData(bittrexUrl);

        return result;
};
