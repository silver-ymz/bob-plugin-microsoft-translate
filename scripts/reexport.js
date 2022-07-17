const path = require('path');
const packageJson = require('../package.json');
const fs = require('fs');

const pkg = `${packageJson.name}.bobplugin`;
const filePath = path.resolve(__dirname, `../dist/${pkg}/main.js`);
let fileContent = fs.readFileSync(filePath, 'utf8');
fileContent = fileContent.replace(/exports.supportLanguages=(\w+),exports.translate=(\w+);/g, 'var supportLanguages = $1, translate = $2;');
fs.writeFileSync(filePath, fileContent);