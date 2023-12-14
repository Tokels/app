import React, { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useAuth } from '../providers/AuthProvider';
import { useLoading } from '../providers/LoadingProvider';

const styles = {
  input:
    'my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
  inputContainer: 'w-full',
  formContainer: 'bg-blue-400',
  button: 'block rounded-lg w-full bg-gray-300 p-4 items-center',
  buttonContainer: 'w-full',
};

const regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
};

const verifyInput = (input: string, regex: RegExp): boolean => {
  return regex.test(input);
};

interface LoginFormProps {
  isLogin: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState(__DEV__ ? 'julias@tokl.com' : '');
  const [password, setPassword] = useState(__DEV__ ? '123Julia!' : '');
  const [confirmPassword, setConfirmPassword] = useState(__DEV__ ? '123Julia!' : '');
  const { setLoading } = useLoading();
  const { onLogin, onRegister } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading!(true);
      await onLogin!(email, password);
      return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading!(false);
    }
  };

  const handleRegistration = async () => {
    try {
      console.log(password);
      setLoading!(true);
      if (!verifyInput(email, regex.email)) {
        throw new Error('Provide valid email');
      }
      if (!verifyInput(password, regex.password)) {
        throw new Error('Provide safer password');
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
      await onRegister!(email, password);
      await onLogin!(email, password);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading!(false);
    }
  };

  return (
    <View className="w-full">
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
      {!isLogin ? (
        <TextInput
          className={styles.input}
          secureTextEntry
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      ) : (
        <></>
      )}
      <View className={styles.buttonContainer}>
        <Pressable
          className={styles.button}
          onPress={isLogin ? () => void handleLogin() : () => void handleRegistration()}
        >
          <Text>{isLogin ? 'Login' : 'Create free account'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;
