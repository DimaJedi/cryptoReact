const { getCurrencies } = require('../utils.js');
const { bittrexUrl } = require('../constants.js');

module.exports = async () => {
        const { result } = await getCurrencies(bittrexUrl);

        return result;
};
