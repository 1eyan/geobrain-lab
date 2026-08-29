import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const required = [
  'dist/zh/index.html',
  'dist/en/index.html',
  'dist/zh/research/index.html',
  'dist/en/research/index.html',
  'dist/zh/people/index.html',
  'dist/en/people/index.html',
  'dist/zh/publications/index.html',
  'dist/en/publications/index.html',
  'dist/zh/projects/index.html',
  'dist/en/projects/index.html',
  'dist/zh/news/index.html',
  'dist/en/news/index.html',
];

const missing = required.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`Missing generated routes:\n${missing.join('\n')}`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk('dist').filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (/target="_blank"(?![^>]*rel="noopener noreferrer")/.test(html)) {
    throw new Error(`Unsafe external link in ${file}`);
  }
  if (/href="\/(zh|en)\//.test(html)) {
    throw new Error(`GitHub Pages base path missing in ${file}`);
  }
}

console.log(`Validated ${htmlFiles.length} static HTML pages.`);
