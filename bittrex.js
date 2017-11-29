const {getCurrencies} = require('./utils.js');
const {bittrexUrl} = require('./constants.js');

let previousCurrencies;

const checkRequest = (result) => {
    if (!result || !result.length) {
        throw new Error('Response currencies count is 0')
    }
};

const checkIfPresentedBefore = ({Currency: currencyToCheck}) =>
    previousCurrencies.find(({Currency: presented}) => presented === currencyToCheck);

const proceedCheck = async (broadcastMessage) => {
    try {
        const currencies = await getCurrencies(bittrexUrl);

        checkRequest(currencies);

        if (!previousCurrencies) {
            previousCurrencies = currencies;
        } else if (previousCurrencies.length !== currencies.length) {
            broadcastMessage('notification', JSON.stringify(currencies.find(checkIfPresentedBefore)));
        }

    } catch (err) {
        broadcastMessage('warning', err);
        console.log(err);
    }
};

module.exports = (broadcastMessage) => {
    setInterval(proceedCheck, 2000, broadcastMessage);
};
