const { differenceBy } = require('lodash');

const checkResponse = (result) => {
    if (!result || !result.length) {
        throw new Error('Response currencies count is 0');
    }
};

module.exports = (time, broadcaster, requestMaker, fieldToCompare) => {
    let prevResponse;
    let checksCounter = 0;

    const marketProcess = async () => {
        try {
            const response = await requestMaker();
            checkResponse(response);

            if (!prevResponse) {
                prevResponse = response;
            }

            if (prevResponse.length !== response.length) {
                broadcaster('notification', differenceBy(prevResponse, response, fieldToCompare || undefined));
        } else {
                broadcaster('requests', checksCounter += 1);
            }

            prevResponse = response;
        } catch ({ message }) {
            broadcaster('warning', message);
            console.log(message);
        }
    };

    setInterval(marketProcess, time);
};
