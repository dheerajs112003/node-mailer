import nodemailer from 'nodemailer'

async function sendMail(){
    try{
console.log("generate test smtp");
const testAccount= await nodemailer.createTestAccount();
const  transporter =nodemailer.createTransport({
    host: testAccount.smtp.host,
    port:testAccount.smtp.port,
    secure:testAccount.smtp.secure,
    auth:{
        user:testAccount.user,
        pass:testAccount.pass,
    },
});
const mailOptions = {
  from: '"Fred Foo 👻" <foo@example.com>', 
  to: "bar@example.com, baz@example.com", 
  subject: "Welcome to the TypeScript App! ", 
  text: "Hello world? This is a plain text welcome email.",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
      <h2 style="color: #333;">Welcome aboard! 👋</h2>
      <p>We are thrilled to have you here. Thanks for signing up for our TypeScript demo project.</p>
      <br />
      <p>Best regards,<br/>The Dev Team</p>
    </div>
  `, 
};
console.log('sending..');
const info =await transporter.sendMail(mailOptions);
console.log('mail send');
console.log("preview url",nodemailer.getTestMessageUrl(info))
console.log('message Id',info.messageId);
    }catch(error){

    }
}
sendMail(); 