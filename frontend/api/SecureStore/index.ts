import * as SecureStore from 'expo-secure-store';

export const secureStoreSave = async (key: string, value: string): Promise<void> => {
  await SecureStore.setItemAsync(key, value);
};

export const secureStoreGetValueFor = async (key: string): Promise<string> => {
  const result = await SecureStore.getItemAsync(key);
  if (result != null) {
    return result;
  } else {
    return '';
  }
};
