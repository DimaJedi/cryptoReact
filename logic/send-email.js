const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dmzhdkv@gmail.com',
        pass: 'axerace81973',
    },
});

module.exports = (to, subject, message) => {
    const mailOptions = {
        from: 'dmzhdkv@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};
