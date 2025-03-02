import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

// Set up the SMTP transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Load email from .env
    pass: process.env.PASSWORD, // Load password from .env
  },
});

// POST route to handle form submission and send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Send email to your stored email
    subject: `Message from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email', error });
    }
    res.status(200).json({ message: 'Email sent successfully!', info });
  });
});  
  

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
