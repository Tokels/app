import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import ToastManager, { Toast } from 'toastify-react-native';

type ErrorProps = {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const ErrorContext = createContext<Partial<ErrorProps>>({});

export function useError() {
  return useContext(ErrorContext);
}

export const ErrorProvider = ({ children }: { children: ReactElement }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      Toast.error(error, '');
      setError('');
    }
  }, [error]);

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError,
      }}
    >
      <ToastManager />
      {children}
    </ErrorContext.Provider>
  );
};
