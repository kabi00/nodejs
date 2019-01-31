var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kabimass97@gmail.com',
    pass: '######'
  }
});

var mailOptions = {
  from: 'kabimass97@gmail.com',
  to: 'maryannminerva@gmail.com',
  subject: 'Testing my nodemailer module',
  text: 'This is easy !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
