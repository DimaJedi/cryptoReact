const { sendData } = require('../utils');
const { telegram: { token, chat } } = require('../config');

module.exports = (notificationType, market, text) => {
    let msg = `<b>Type</b>: ${notificationType}
<b>Market</b>: ${market}
${text}`;

    msg = encodeURI(msg);
    sendData(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${msg}`);
};
