import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';

type LoadingProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<Partial<LoadingProps>>({});

export function useLoading() {
  return useContext(LoadingContext);
}

export const LoadingProvider = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <ActivityIndicator />
      {children}
    </LoadingContext.Provider>
  );
};
