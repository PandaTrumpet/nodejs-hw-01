import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = [];
    for (let i = 0; i < number; i++) {
      data.push(createFakeContact());
    }

    const jsonFile = JSON.stringify(data, null, 2); // Форматирование JSON с отступами для удобочитаемости

    try {
      await fs.access(PATH_DB); // Проверка существования файла
      const existingData = await fs.readFile(PATH_DB, 'utf-8'); // Чтение существующего файла
      const parsedData = JSON.parse(existingData); // Парсинг существующего JSON
      const updatedData = [...parsedData, ...data]; // Объединение старых и новых данных
      const updatedJsonFile = JSON.stringify(updatedData, null, 2); // Обновленный JSON
      await fs.writeFile(PATH_DB, updatedJsonFile, 'utf-8'); // Запись обновленных данных
    } catch {
      // Файл не существует, создаем новый файл
      await fs.writeFile(PATH_DB, jsonFile, 'utf-8');
    }

    console.log(`Successfully wrote ${number} contacts to ${PATH_DB}`);
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
