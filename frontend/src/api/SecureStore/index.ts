import * as SecureStore from 'expo-secure-store';

export const secureStoreSave = async (key: string, value: string): Promise<void> => {
  try {
    if (!value) {
      throw 'Please enter a value';
    }
    await SecureStore.setItemAsync(key, value);
    const storedValue = await SecureStore.getItemAsync(key);
    if (storedValue === value) {
      alert('Key successfully saved');
    } else {
      throw 'Something happened, please try again';
    }
  } catch (err) {
    alert(err);
  }
};

export const secureStoreGetValueFor = async (key: string): Promise<string> => {
  try {
    const storedValue = await SecureStore.getItemAsync(key);
    if (storedValue) {
      return storedValue;
    }
    return '';
  } catch (err) {
    alert(err);
    return '';
  }
};
