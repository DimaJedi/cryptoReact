const fetch = require('node-fetch');

const requestData = async (url) => {
    const response = await fetch(url);
    const body = await response.text();

    return JSON.parse(body);
};

const sendData = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        body,
    });
    const data = await response.text();

    return JSON.parse(data);
};

module.exports = {
    requestData,
    sendData,
};
