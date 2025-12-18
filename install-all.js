import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const demos = [
  'Demo 1 (Sakura Sushi House)',
  'Demo 2 (ZEN Sushi)',
  'Demo 3 (Realistic Demo)',
  'Demo 4 (Korean BBQ)',
  'Demo 5 (Italian Pizzeria)',
  'Demo 6 (Coffee Shop)',
];

console.log('📦 Installing dependencies for all demos...\n');

for (const demo of demos) {
  const demoPath = join(__dirname, demo);
  
  if (existsSync(join(demoPath, 'package.json'))) {
    console.log(`Installing ${demo}...`);
    try {
      execSync('npm install --legacy-peer-deps', { 
        stdio: 'inherit', 
        cwd: demoPath 
      });
      console.log(`✅ ${demo} dependencies installed!\n`);
    } catch (error) {
      console.error(`⚠️ Warning: Failed to install ${demo}, continuing...`);
    }
  }
}

console.log('🎉 All demo dependencies installed!');
