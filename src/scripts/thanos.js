// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
// function foo(arr) {
//   return arr.filter(() => Math.random() >= 0.5);
// }
// export const thanos = async () => {
//   try {
//     const data = await fs.readFile(PATH_DB, 'utf-8');
//     const dataJson = JSON.parse(data);
//     const result = foo(dataJson);
//     const jsonResult = JSON.stringify(result, null, 2);
//     await fs.writeFile(PATH_DB, jsonResult, 'utf-8');
//   } catch (error) {
//     console.log(error);
//   }
// };

// await thanos();

import { PATH_DB } from '../constants/contacts.js';

import fs from 'fs/promises';
export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);

    if (parseData.length !== 0) {
      const deleteLast = parseData.pop();

      //   const deleteStr = JSON.stringify(deleteLast, null, 2);
      //   await fs.writeFile(PATH_DB, deleteStr, 'utf-8');
      const filteredData = parseData.filter((el) => el !== deleteLast);
      const newData = JSON.stringify(filteredData, null, 2);
      await fs.writeFile(PATH_DB, newData, 'utf-8');
      console.log(filteredData);
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

await thanos();
