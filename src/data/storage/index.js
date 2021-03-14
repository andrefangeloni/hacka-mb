import AsyncStorage from '@react-native-async-storage/async-storage';

const find = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    // ignore err
  }
};

const store = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (err) {
    // ignore err
  }
};

const remove = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (err) {
    // ignore err
  }
};

const findMultiple = async (keys) => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (err) {
    // ignore err
  }
};

const storeMultiple = async (values) => {
  try {
    return await AsyncStorage.multiSet(values);
  } catch (err) {
    // ignore err
  }
};

const removeMultiple = async (keys) => {
  try {
    return await AsyncStorage.multiRemove(keys);
  } catch (err) {
    // ignore err
  }
};

export default {
  find,
  store,
  remove,
  findMultiple,
  storeMultiple,
  removeMultiple,
};

export const keys = {
  REFRESH_TOKEN: 'jornada@refreshToken',
  TOKEN: 'jornada@token',
};
