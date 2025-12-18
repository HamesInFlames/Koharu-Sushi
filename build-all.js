import { execSync } from 'child_process';
import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const demos = [
  { name: 'Demo 1 (Sakura Sushi House)', folder: 'demo1' },
  { name: 'Demo 2 (ZEN Sushi)', folder: 'demo2' },
  { name: 'Demo 3 (Realistic Demo)', folder: 'demo3' },
  { name: 'Demo 4 (Korean BBQ)', folder: 'demo4' },
  { name: 'Demo 5 (Italian Pizzeria)', folder: 'demo5' },
  { name: 'Demo 6 (Coffee Shop)', folder: 'demo6' },
];

console.log('☕ Building Kim Consultant Demo Hub...\n');

// Clean dist folder
const distPath = join(__dirname, 'dist');
if (existsSync(distPath)) {
  rmSync(distPath, { recursive: true });
}

// Step 1: Build the main hub
console.log('📦 Building main Demo Hub...');
execSync('npx vite build', { stdio: 'inherit', cwd: __dirname });
console.log('✅ Demo Hub built!\n');

// Step 2: Build each demo and copy to dist subfolder
for (const demo of demos) {
  const demoPath = join(__dirname, demo.name);
  const demoDist = join(demoPath, 'dist');
  const targetPath = join(distPath, demo.folder);

  console.log(`📦 Building ${demo.name}...`);
  
  // Build with base path set to the subfolder
  execSync(`npx vite build --base=/${demo.folder}/`, { 
    stdio: 'inherit', 
    cwd: demoPath 
  });
  
  // Copy to main dist
  mkdirSync(targetPath, { recursive: true });
  cpSync(demoDist, targetPath, { recursive: true });
  
  console.log(`✅ ${demo.name} built and copied to /dist/${demo.folder}/\n`);
}

console.log('🎉 All builds complete!');
console.log('   Main hub: /dist/');
console.log('   Demo 1 (Sakura Sushi):  /dist/demo1/');
console.log('   Demo 2 (ZEN Sushi):     /dist/demo2/');
console.log('   Demo 3 (Realistic):     /dist/demo3/');
console.log('   Demo 4 (Korean BBQ):    /dist/demo4/');
console.log('   Demo 5 (Italian):       /dist/demo5/');
console.log('   Demo 6 (Coffee Shop):   /dist/demo6/');

