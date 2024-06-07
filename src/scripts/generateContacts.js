import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async () => {
  try {
    const data = createFakeContact();
    const jsonFile = JSON.stringify(data);
    const writeFile = await fs.writeFile(PATH_DB, `${jsonFile}`);

    console.log(writeFile);
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
