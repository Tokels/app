import React, { useState } from 'react';
import type { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { secureStoreGetValueFor, secureStoreSave } from '../api';
import { TextInput } from 'react-native-gesture-handler';

const styles = {
  container: 'items-center py-10 px-10',
  input: 'bg-gray-200 w-full mb-2 py-1 px-3 rounded',
  button: 'bg-gray-300 w-full py-1 px-3 rounded items-center',
  h1: 'text-3xl',
  h2: 'text-xl',
  p: 'mb-2',
  buttonParagraph: 'text-xl uppercase',
};

const SecureStore: FC = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('(Placeholder for value)');
  const [setGetValueFromKey, setGetKey] = useState('');

  return (
    <View className={styles.container}>
      <Text className={styles.h1}>Enter a key and a value</Text>
      <Text className={styles.p}>Your key and value will be saved to the Secure Store</Text>
      <TextInput
        className={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType={'visible-password'}
        placeholder="Enter a key"
        onChangeText={(text) => setKey(text)}
        value={key}
      />
      <TextInput
        className={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType={'visible-password'}
        placeholder="Enter a value"
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <Pressable
        className={styles.button}
        onPress={() => {
          secureStoreSave(key, value);
          setValue('');
          setKey('');
        }}
      >
        <Text className={styles.buttonParagraph}>Save</Text>
      </Pressable>

      <Text className={styles.h1}>Enter a key</Text>
      <TextInput
        className={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType={'visible-password'}
        placeholder="Enter a key:"
        onChangeText={(text) => setGetKey(text.toLowerCase())}
        value={setGetValueFromKey}
        onSubmitEditing={async () => {
          const storedValue = await secureStoreGetValueFor(setGetValueFromKey);
          setResult(storedValue);
        }}
      />
      <Text className={styles.h2}>{result}</Text>
    </View>
  );
};

export default SecureStore;
