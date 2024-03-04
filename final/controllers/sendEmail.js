const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'jacey.cole54@ethereal.email',
      pass: 'QnyNQhVQCg1VkkUQW3',
    },
  });

  let info = await transporter.sendMail({
    from: '"Ajaas View" <smajaas@gmail.com>',
    to: 'smajaas@hotmail.com',
    subject: 'hello',
    html: '<h2>Sending Emails with Node.js</h2>',
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'smajaas@hotmail.com',
    from: 'smajaas@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
