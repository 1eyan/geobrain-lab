import { createCipheriv, createDecipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const inputPath = process.argv[2];
const outputPath = process.argv[3] ?? 'public/guides/geophysics-ai-onboarding.enc';
const verificationPath = process.argv[4];
const password = process.env.GEOBRAIN_GUIDE_PASSWORD;

if (!inputPath || !password) {
  throw new Error('Usage: set GEOBRAIN_GUIDE_PASSWORD, then run node scripts/encrypt-guide.mjs <input-pdf> [output-file] [verification-output]');
}

const magic = Buffer.from('GBG1', 'ascii');
const iterations = 310000;
const salt = randomBytes(16);
const iv = randomBytes(12);
const plaintext = await readFile(inputPath);

if (!plaintext.subarray(0, 5).equals(Buffer.from('%PDF-'))) {
  throw new Error('Input is not a PDF file.');
}

const key = pbkdf2Sync(password, salt, iterations, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
const tag = cipher.getAuthTag();
const encrypted = Buffer.concat([magic, salt, iv, ciphertext, tag]);

const decipher = createDecipheriv('aes-256-gcm', key, iv);
decipher.setAuthTag(tag);
const roundTrip = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
if (!roundTrip.equals(plaintext)) throw new Error('Encryption round-trip verification failed.');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, encrypted);

if (verificationPath) {
  await mkdir(dirname(verificationPath), { recursive: true });
  await writeFile(verificationPath, roundTrip);
}

console.log(`Encrypted ${plaintext.length} bytes to ${outputPath}; round-trip verification passed.`);
