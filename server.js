import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validate required fields
  if (!firstName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email and message'
    });
  }

  try {
    // Format the email content using form details
    const emailContent = `
      <h2>New Query from Vinayak's portfolio</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: email,
      to: "vbs02002@gmail.com", // Replace with your email address
      subject: "New Query from Contact Form",
      text: `New message from ${firstName} ${lastName}. Email: ${email}. `,
      html: emailContent,
    });

    console.log("Message sent:", info.messageId);

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending email. Please try again later.'
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});