import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Check if dist folder exists
const distPath = join(__dirname, 'dist');
console.log('Checking dist folder:', distPath);
console.log('Dist folder exists:', existsSync(distPath));

if (existsSync(distPath)) {
  console.log('Dist contents:', readdirSync(distPath));
} else {
  console.error('ERROR: dist folder does not exist!');
}

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

// SPA fallback for demo4
app.get('/demo4/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo4', 'index.html'));
});

// SPA fallback for demo5
app.get('/demo5/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo5', 'index.html'));
});

// SPA fallback for demo6
app.get('/demo6/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'demo6', 'index.html'));
});

// Catch-all fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`☕ Kim Consultant Demo Hub running on port ${PORT}`);
  console.log(`   Main Hub: http://localhost:${PORT}/`);
  console.log(`   Demo 1 (Sakura Sushi):  http://localhost:${PORT}/demo1/`);
  console.log(`   Demo 2 (ZEN Sushi):     http://localhost:${PORT}/demo2/`);
  console.log(`   Demo 3 (Realistic):     http://localhost:${PORT}/demo3/`);
  console.log(`   Demo 4 (Korean BBQ):    http://localhost:${PORT}/demo4/`);
  console.log(`   Demo 5 (Italian):       http://localhost:${PORT}/demo5/`);
  console.log(`   Demo 6 (Coffee Shop):   http://localhost:${PORT}/demo6/`);
});
