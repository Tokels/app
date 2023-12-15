import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { useToast } from './ToastProvider';
import { useLoading } from './LoadingProvider';
import { secureStoreGetValueFor, secureStoreSave } from '../api';
import { validateInput } from '../utils/validators';
import { regex } from '../utils/regex';
const { manifest2 } = Constants;

const API_URL =
  'http://' + manifest2?.extra?.expoGo?.debuggerHost?.replace(/:8081/, ':8080/api/users');
const JWT_KEY = 'user-token';

type AuthProps = {
  token: string;
  onRegister: (email: string, password: string, confirmPassword: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => void;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [token, setToken] = useState('');
  const [initialized, setInitializsed] = useState(false);
  const { setToast } = useToast();
  const { setLoading } = useLoading();

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await secureStoreGetValueFor(JWT_KEY);
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
      setInitializsed(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadToken();
  }, []);

  const handleLogin = async (email: string, password: string): Promise<void> => {
    try {
      setLoading!(true);
      if (!validateInput(email, regex.email)) {
        throw new Error('Provide valid email');
      }
      const result: AxiosResponse = await axios.post(`${API_URL}/authenticate`, {
        email,
        password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: string = result?.data;
      if (token) {
        setToast!((prevState) => ({ ...prevState, success: 'Logged in' }));
        setToken(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await secureStoreSave(JWT_KEY, token.toString());
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const error: string = err?.response?.data;
        setToast!((prevState) => ({ ...prevState, error }));
      } else if (err instanceof Error) {
        const error = err?.message;
        setToast!((prevState) => ({ ...prevState, error }));
      } else {
        console.error(err);
      }
    } finally {
      setLoading!(false);
    }
  };

  const handleRegister = async (
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<void> => {
    try {
      setLoading!(true);
      if (!validateInput(email, regex.email)) {
        throw new Error('Provide valid email');
      }
      if (!validateInput(password, regex.password)) {
        throw new Error('Provide safer password');
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
      const result = await axios.post(`${API_URL}/`, { email, password });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: string = result?.data;
      if (token) {
        setToast!((p) => ({ ...p, success: 'Account created' }));
        setToken(token);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const error: string = err?.response?.data;
        setToast!((prevState) => ({ ...prevState, error }));
      } else if (err instanceof Error) {
        const error = err?.message;
        setToast!((prevState) => ({ ...prevState, error }));
      } else {
        console.error(err);
      }
    } finally {
      setLoading!(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setToast!((prevState) => ({ ...prevState, success: "You're logged out!" }));
    axios.defaults.headers.common['Authorization'] = '';
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        initialized,
        onLogin: handleLogin,
        onRegister: handleRegister,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
