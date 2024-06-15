// export const addOneContact = async () => {
//   try {
//     const mainFile = await fs.readFile(PATH_DB, 'utf-8');
//     const parseFile = JSON.parse(mainFile);
//     const newContact = createFakeContact();
//     const updatedData = [...parseFile, newContact];
//     const updateJSON = JSON.stringify(updatedData, null, 2);
//     await fs.writeFile(PATH_DB, updateJSON, 'utf-8');
//   } catch (error) {
//     console.log(error);
//   }
// };

// await addOneContact();
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);

    const newData = createFakeContact();
    const updatedData = [...parseData, newData];
    const updatedDataJson = JSON.stringify(updatedData, null, 2);
    await fs.writeFile(PATH_DB, updatedDataJson, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};
await addOneContact();
