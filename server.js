import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, readdirSync } from 'fs';
import nodemailer from 'nodemailer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if dist folder exists
const distPath = join(__dirname, 'dist');
console.log('Checking dist folder:', distPath);
console.log('Dist folder exists:', existsSync(distPath));

if (existsSync(distPath)) {
  console.log('Dist contents:', readdirSync(distPath));
} else {
  console.error('ERROR: dist folder does not exist!');
}

// Email endpoint using Nodemailer with Gmail
app.post('/api/contact', async (req, res) => {
  console.log('📧 Contact form submission received');
  
  try {
    const { email, phone, message } = req.body;

    if (!email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('❌ EMAIL_USER or EMAIL_PASS not set');
      return res.status(500).json({ error: 'Email not configured. Contact us at xoxoksh05@gmail.com' });
    }

    // Try with port 587 and TLS
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000
    });

    await transporter.sendMail({
      from: emailUser,
      to: 'xoxoksh05@gmail.com',
      replyTo: email,
      subject: 'Landing Essentials - New Inquiry',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    console.log('✅ Email sent!');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email error:', error.message);
    res.status(500).json({ error: 'Failed to send. Email us directly at xoxoksh05@gmail.com' });
  }
});

// Serve static files from dist folder
app.use(express.static(distPath));

// SPA fallback for main hub
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// SPA fallback for demo1
app.get('/demo1/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo1', 'index.html'));
});

// SPA fallback for demo2
app.get('/demo2/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo2', 'index.html'));
});

// SPA fallback for demo3
app.get('/demo3/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo3', 'index.html'));
});

// Catch-all fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🍣 Koharu Demo Hub running on port ${PORT}`);
  console.log(`   Main Hub: http://localhost:${PORT}/`);
  console.log(`   Demo 1:   http://localhost:${PORT}/demo1/`);
  console.log(`   Demo 2:   http://localhost:${PORT}/demo2/`);
  console.log(`   Demo 3:   http://localhost:${PORT}/demo3/`);
});


