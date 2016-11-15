var nodemailer = require('nodemailer'),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path');

var config = require('../config'),
    templatesDir = path.resolve(__dirname, '..', 'templates');

var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: config.MAILGUN_USER,
    pass: config.MAILGUN_PASSWORD
  }
});

/*
 |-----------------------------------------------------------
 | @Function sendEmail
 | Send email with template and callback done
 |-----------------------------------------------------------
 */

exports.sendEmail = function (user, template, done) {
  var templateFile = new EmailTemplate(path.join(templatesDir, template));
	console.log(templateFile);

  templateFile.render(user, function (err, results) {
    if (err)
      return done(err,'Sorry we are experiencing a server problem');
    console.log('user');
    console.log(results);
    var mailOptions = {
      to: user.email,
      from: config.email,
      subject: config[template].subject,
        html: results.html,
        text: 'results.text'
    };
    transporter.sendMail(mailOptions, function(err) {
      if(err) return done(err, 'Server Error');
      var msg = config[template].success;
      done(err,msg);
    });

  });

}
  
