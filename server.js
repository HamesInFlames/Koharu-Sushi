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

// Email endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📧 Contact form submission received');
  
  try {
    const { email, phone, message } = req.body;
    console.log('Form data:', { email, phone, message: message ? '(provided)' : '(missing)' });

    if (!email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transporter - using Gmail
    // Set EMAIL_USER and EMAIL_PASS (Gmail app password) in Railway environment variables
    const emailUser = process.env.EMAIL_USER || 'xoxoksh05@gmail.com'
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD

    if (!emailPass) {
      console.error('❌ EMAIL_PASS not set. Cannot send email.');
      return res.status(500).json({ 
        error: 'Email service not configured. Please contact us directly at xoxoksh05@gmail.com' 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: emailUser,
      to: 'xoxoksh05@gmail.com',
      replyTo: email,
      subject: 'Landing Essentials Package Inquiry',
      text: `New inquiry from contact form:\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email send error:', error.message);
    res.status(500).json({ error: 'Failed to send email. Please try again later or contact us directly at xoxoksh05@gmail.com' });
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


