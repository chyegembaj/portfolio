import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let transport = {
  //host: "smtp.mail.yahoo.com",
  //port: 465,
  service: "Gmail",
  secure: false,
  auth: {
    user: process.env.username,
    pass: process.env.password,
  },
};

let transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/api/form", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  // const htmlEmail = `
  // <h3>Contact Details</h3>
  // <ul>
  // <li>Name: ${name}</li>
  //  <li>Email: ${email}</li>
  // </ul>
  // <h3>Message</h3>
  // <p>${message}</p>
  // `;

  let mail = {
    from: email,
    to: process.env.username,
    subject: "New message from contact form",
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});
// var transporter = nodemailer.createTransport(
//   smtpTransport({
//     name: serverName,
//     host: host,
//     port: port,
//     secure: true,
//     auth: {
//       user: user,
//       pass: pass,
//     },
//   })
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
