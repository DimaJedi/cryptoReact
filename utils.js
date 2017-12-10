const fetch = require('node-fetch');

const getCurrencies = async (url) => {
    const response = await fetch(url);
    const body = await response.text();

    return JSON.parse(body);
};

module.exports = {
    getCurrencies,
};
