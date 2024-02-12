const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
const {execSync} = require('node:child_process');

const outDir = './dist';

// Clear out dir
rimraf.sync(outDir);
fs.mkdirSync(outDir);

// Copy ckeditor sources
fs.cpSync('node_modules/ckeditor4/', outDir, {recursive: true});

// Apply patches
const cwd = path.join(__dirname, outDir);
execSync('patch -p1 -i ../patches/package-name.patch', {cwd});
execSync('patch -p1 -i ../patches/lts-check-return.patch', {cwd});
