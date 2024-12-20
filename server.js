const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

// Validate email configuration
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Email configuration is missing in .env file!");
  process.exit(1);
}

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error in email configuration:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ code: 400, status: "Missing fields" });
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ code: 500, status: "Message sending failed" });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent Successfully" });
    }
  });
});
