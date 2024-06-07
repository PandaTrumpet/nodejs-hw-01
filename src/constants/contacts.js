import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';
const main = path.join(process.cwd());
export const PATH_DB = path.join(main, 'src/db', 'db.json');
const read = fs.readFileSync(PATH_DB);
const data = createFakeContact();
// console.log(data);
// console.log(read.toString());
