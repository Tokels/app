import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { ReactElement, createContext, useContext, useState } from 'react';
import Constants from 'expo-constants';
import { useError } from './ErrorProvider';
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
  const { setError } = useError();

  const handleLogin = async (email: string, password: string): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.post(`${API_URL}/authenticate`, {
        email,
        password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: boolean = result?.data;
      setToken(token);
      return;
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setError!(err?.response?.data);
      } else {
        console.error(err);
      }
    }
    return;
  };

  const handleRegister = async (email: string, password: string): Promise<void> => {
    try {
      const result = await axios.post(`${API_URL}/`, { email, password });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: boolean = result?.data;
      setToken(token);
      return;
    } catch (err) {
      if (err instanceof AxiosError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setError!(err?.response?.data);
      } else {
        console.error(err);
      }
    }
    return;
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
