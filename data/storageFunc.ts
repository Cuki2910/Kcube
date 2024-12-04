import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as FORMATDATA from './interfaceFormat';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});

export default storage;


// TODO: change it every project
const ERROR_SAVE_MESSAGE = `Lưu không thành công`
const ERROR_GET_MESSAGE = `Dữ liệu không tồn tại hoặc lấy dữ liệu không thành công`
const ERROR_CLEAR_MESSAGE = `Xoá dữ liệu không thành công`

/**
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const saveUser = async (data: FORMATDATA.UserFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert(ERROR_SAVE_MESSAGE);
    console.log('Failed to save user:', error);
    return false;
  }
};

/**
 * Retrieves the user data from storage.
 *
 * @returns {Promise<FORMATDATA.UserFormat | false>} A promise that resolves to the user data if found, or `false` if an error occurs.
 */
export const getUser = async (): Promise<FORMATDATA.UserFormat | false> => {
  try {
    const ret: FORMATDATA.UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
  } catch (error) {
    console.log('Failed to get user:', error);
    return false;
  }
};

/**
 * Asynchronously removes the user data from storage.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user data was successfully removed,
 *                             or `false` if an error occurred during the removal process.
 */
export const removeUser = async (): Promise<boolean> => {
  try {
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    console.log('Failed to remove user:', error);
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

export const saveStorageItem = async <K extends keyof FORMATDATA.StorageItem>(key: K, item: FORMATDATA.StorageItem[K], id?: string): Promise<boolean> => {
  try {
    await storage.save({
      key,
      data: item,
      id,
    });
    console.log(`Save successfully: ${key} - ${id ? id : ''}`);

    return true;
  } catch (error) {
    console.error(`Failed to save ${key}`, error);
    return false;
  }
}

export const getStorageList = async <K extends keyof FORMATDATA.StorageItem>(key: K): Promise<FORMATDATA.StorageItem[K][] | false> => {
  try {
    const ret: FORMATDATA.StorageItem[K][] = await storage.getAllDataForKey(key);
    return ret;
  } catch (error) {
    console.log(`Failed to get ${key} list:`, error);
    return false;
  }
}

export const getStorageItem = async <K extends keyof FORMATDATA.StorageItem>(key: K, id?: string): Promise<FORMATDATA.StorageItem[K] | false> => {
  try {
    const ret: FORMATDATA.StorageItem[K] = await storage.load({
      key,
      id,
    });
    return ret;
  } catch (error) {
    console.log(`Failed to get ${key} by id:`, error);
    return false;
  }
}

export const removeStorageItem = async <K extends keyof FORMATDATA.StorageItem>(key: K, id?: string): Promise<boolean> => {
  try {
    await storage.remove({
      key,
      id,
    });
    return true;
  } catch (error) {
    console.log(`Failed to remove ${key}:`, error);
    return false;
  }
}

export const clearStorage = async <K extends keyof FORMATDATA.StorageItem>(key: K): Promise<boolean> => {
  try {
    await storage.clearMapForKey(key);
    return true;
  } catch (error) {
    console.log(`Failed to clear ${key} list:`, error);
    return false;
  }
}