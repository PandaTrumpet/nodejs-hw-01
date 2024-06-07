import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async () => {
  try {
    const data = createFakeContact();
    fs.appendFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

await generateContacts();
