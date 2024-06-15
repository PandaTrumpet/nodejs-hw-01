// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
// export const countContacts = async () => {
//   try {
//     const data = await fs.readFile(PATH_DB, 'utf-8');
//     const dataJson = JSON.parse(data);
//     const dataLength = dataJson.length;
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(await countContacts());

import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
<<<<<<< HEAD
    const parseData = JSON.parse(data);
    console.log(parseData.length);
=======
    const dataJson = JSON.parse(data);
    const dataLength = dataJson.length;
    console.log(dataLength);
>>>>>>> 08da9baa2108b0b04d4d3e7ecccc65826fcaf292
  } catch (error) {
    console.log(error);
  }
};

countContacts();
