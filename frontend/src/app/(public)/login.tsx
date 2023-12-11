import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import SplitScreen from '../../components/containers/SplitScreen';
import { TextInput } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { styles } from './common';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        </View>
        <View className={styles.buttonContainer}>
          <Pressable className={styles.button} onPress={handleLogin}>
            <Text>Login</Text>
          </Pressable>
        </View>
      </SplitScreen>
      <Link href={'/(public)/register'} asChild>
        <Pressable className={styles.link}>
          <Text>Create new account</Text>
        </Pressable>
      </Link>
    </SplitScreen>
  );
};

export default Login;
