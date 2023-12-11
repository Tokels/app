import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, Pressable } from 'react-native';
import SplitScreen from '../../components/containers/SplitScreen';
import { styles } from './common';
import { Link } from 'expo-router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
  };

  return loading ? (
    <SplitScreen>
      <ActivityIndicator />
    </SplitScreen>
  ) : (
    <SplitScreen styleParent={styles.rootContainer}>
      <View></View>
      <SplitScreen>
        <View className={styles.inputContainer}>
          <TextInput
            className={styles.input}
            placeholder="name@tokl.com"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className={styles.input}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            className={styles.input}
            secureTextEntry
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View className={styles.buttonContainer}>
          <Pressable className={styles.button} onPress={handleLogin}>
            <Text>Create free account</Text>
          </Pressable>
        </View>
      </SplitScreen>
      <Link href={'/(public)/login'} asChild>
        <Pressable className={styles.link}>
          <Text>Already have an account?</Text>
        </Pressable>
      </Link>
    </SplitScreen>
  );
};

export default Register;
