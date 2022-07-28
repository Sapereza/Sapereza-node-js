var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    //To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    //To send HTML formatted text in your email use the "html" property instead of the "text" property
    //html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
//Use the username and password from your selected email provider to send an email. This tutorial will show you how to use your Gmail account to send an email: