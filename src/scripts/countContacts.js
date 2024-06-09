import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dataJson = JSON.parse(data);
    const dataLength = dataJson.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
