import { v4 as uuidv4 } from 'uuid';

export const DatabaseConnection = () => {
  const localStorageKey = 'rick-and-morty-app-data';
  const storageData = JSON.parse(localStorage.getItem(localStorageKey)) || [];

  return {
    postMessage(newData) {
      newData.id = uuidv4();
      storageData.push(newData);
      localStorage.setItem(localStorageKey, JSON.stringify(storageData));
    },
    getAllMessages() {
      return storageData;
    },
  };
};
