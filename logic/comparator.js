const { differenceBy } = require('lodash');
const sendEmail = require('./send-email');
const sendTg = require('./send-telegram');
const { markets } = require('../config');

const broadcaster = (market, notificationType, text) => {
    sendEmail('zhadkov@gmail.com', market, text);
    sendTg(notificationType, market, text);
};
const checkResponse = (result) => {
    if (!result || !result.length) {
        throw new Error('Response currencies count is 0');
    }
};

module.exports = (marketId) => {
    let prevResponse;

    const { name, field, time } = markets[marketId];
// eslint-disable-next-line global-require,import/no-dynamic-require
    const requestMaker = require(`../markets/${marketId}`);

    const marketProcess = async () => {
        try {
            const response = await requestMaker();
            checkResponse(response);

            if (!prevResponse) {
                prevResponse = response;
            }

            if (prevResponse.length !== response.length) {
                broadcaster(name, 'notification', JSON.stringify(differenceBy(response, prevResponse, field)));
            }

            prevResponse = response;
        } catch ({ message }) {
            console.log(`${name}: ${message}`);
        }
    };

    setInterval(marketProcess, time);
};
