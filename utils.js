const fetch = require('node-fetch');

const getCurrencies = async (url) => {
    const response = await fetch(url);
    const body = await response.text();

    const {result} = JSON.parse(body);

    return result;
};

module.exports = {
    getCurrencies
};