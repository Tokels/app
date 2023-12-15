import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { ReactElement, createContext, useContext, useState } from 'react';
import Constants from 'expo-constants';
import { useToast } from './ToastProvider';
import { useLoading } from './LoadingProvider';
const { manifest2 } = Constants;

const API_URL =
  'http://' + manifest2?.extra?.expoGo?.debuggerHost?.replace(/:8081/, ':8080/api/users');

type AuthProps = {
  token: boolean;
  onRegister: (email: string, password: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => void;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [token, setToken] = useState(false);
  const { setToast } = useToast();
  const { setLoading } = useLoading();

  const handleLogin = async (email: string, password: string): Promise<void> => {
    try {
      setLoading!(true);
      const result: AxiosResponse = await axios.post(`${API_URL}/authenticate`, {
        email,
        password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: boolean = result?.data;
      if (token) {
        setToast!((p) => ({ ...p, success: 'Logged in' }));
        setToken(token);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const error: string = err?.response?.data;
        setToast!((s) => ({ ...s, error }));
      } else {
        console.error(err);
      }
    } finally {
      setLoading!(false);
    }
  };

  const handleRegister = async (email: string, password: string): Promise<void> => {
    try {
      setLoading!(true);
      const result = await axios.post(`${API_URL}/`, { email, password });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: boolean = result?.data;
      if (token) {
        setToast!((p) => ({ ...p, success: 'Account created' }));
        setToken(token);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const error: string = err?.response?.data;
        setToast!((s) => ({ ...s, error }));
      } else {
        console.error(err);
      }
    } finally {
      setLoading!(false);
    }
  };

  const handleLogout = () => {
    setToken(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        initialized: false,
        onLogin: handleLogin,
        onRegister: handleRegister,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
