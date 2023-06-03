import nodemailer from 'nodemailer'

export const sendMail = (to, data) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'giovani9@ethereal.email',
            pass: '6fCbB7Scqzychq7jeh'
        }
    });
      
      transporter.sendMail({
        from: "sender@jetbooking.com",
        to: to,
        subject: data.subject,
        html: data.body, 
      });
      
}