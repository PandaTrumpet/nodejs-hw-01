import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
function foo(arr) {
  return arr.filter(() => Math.random() >= 0.5);
}
export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dataJson = JSON.parse(data);
    const result = foo(dataJson);
    const jsonResult = JSON.stringify(result, null, 2);
    await fs.writeFile(PATH_DB, jsonResult, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

await thanos();
