const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getFiles(fullPath, files);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const componentFiles = getFiles('components').concat(getFiles('app'));
const fileLineCounts = componentFiles.map(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n').length;
  return { file, lines };
});

fileLineCounts.sort((a, b) => b.lines - a.lines);
console.log(JSON.stringify(fileLineCounts.slice(0, 40), null, 2));
