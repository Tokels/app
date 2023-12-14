import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { ReactElement, createContext, useContext } from 'react';
import Constants from 'expo-constants';
const { manifest2 } = Constants;

const API_URL =
  'http://' + manifest2?.extra?.expoGo?.debuggerHost?.replace(/:8081/, ':8080/api/users');

interface AuthenticadedUser {
  token: string;
}

type AuthProps = {
  token: string | null;
  onRegister: (email: string, password: string) => Promise<AuthenticadedUser>;
  onLogin: (email: string, password: string) => Promise<AuthenticadedUser>;
  onLogout: () => Promise<void>;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const handleLogin = async (email: string, password: string): Promise<AuthenticadedUser> => {
    try {
      const result: AxiosResponse = await axios.post(`${API_URL}/authenticate`, {
        email,
        password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token: string = result?.data;
      return { token };
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);
      } else {
        console.log(err);
      }
    }
    return { token: '' };
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/`, { email, password });
      return result;
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);
      }
    }
  };

  const handleLogout = () => {
    // console.log('Handle Logout');
  };

  return (
    <AuthContext.Provider
      value={{
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
