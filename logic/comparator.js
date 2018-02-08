const { differenceBy, debounce } = require('lodash');

const checkResponse = (result) => {
    if (!result || !result.length) {
        throw new Error('Response currencies count is 0');
    }
};

module.exports = (time, broadcaster, requestMaker, fieldToCompare) => {
    let prevResponse;
    let errorMessage;
    const sendError = debounce(() => broadcaster('warning', errorMessage), time + 1000, { leading: true });

    const marketProcess = async () => {
        try {
            const response = await requestMaker();
            checkResponse(response);

            if (!prevResponse) {
                prevResponse = response;
            }

            if (prevResponse.length !== response.length) {
                broadcaster('notification', JSON.stringify(differenceBy(response, prevResponse, fieldToCompare)));
            }

            prevResponse = response;
        } catch ({ message }) {
            errorMessage = message;
            sendError();
        }
    };

    setInterval(marketProcess, time);
};
