// "use strict";
import nodemailer from "nodemailer";
console.log("nodemailer", nodemailer);

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();
  console.log("main -> testAccount", testAccount);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    /* For G-mail accounts */
    // After allow less secure apps from Google account
    //  https://myaccount.google.com/lesssecureapps
    // service: "gmail",
    // secure: true,
    // auth: {
    //   user: "{{app-email}}",
    //   pass: "{{app-password}}",
    // },
    
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"{{application-name}}" <{{app-email}}>', // sender address
    to: "{{forward-email-to}}, {{forward-email-to}}", // list of receivers
    subject: "Hello ✔ from node mailer", // Subject line
    text: "Hello world? this my account using node mailer", // plain text body
    html: "<h1>Hi there</h1><b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main();
