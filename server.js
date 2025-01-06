import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());  // For parsing application/json

// Set up the SMTP transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amithalbreich15@gmail.com',  // Replace with your email
    pass: '54831020Ah',   // Replace with your email password or app password
  },
});

// POST route to handle form submission and send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,
    to: 'amithalbreich15@gmail.com',  // Replace with the email you want to receive the messages at
    subject: `Message from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
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
