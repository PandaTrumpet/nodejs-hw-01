// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
// export const getAllContacts = async () => {
//   try {
//     const data = await fs.readFile(PATH_DB, 'utf-8');
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(await getAllContacts());

import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dataParse = JSON.parse(data);
    console.log(dataParse);
  } catch (error) {
    console.log(error.message);
  }
};

getAllContacts();
