import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    // const data = await fs.readFile(PATH_DB, 'utf-8');
    await fs.writeFile(PATH_DB, '[]');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
