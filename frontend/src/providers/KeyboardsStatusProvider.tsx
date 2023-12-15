import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

type KeyboardStatusProps = {
  keyboardStatus: boolean;
};

const KeyboardStatusContext = createContext<Partial<KeyboardStatusProps>>({});

export function useKeyboardStatus() {
  return useContext(KeyboardStatusContext);
}

export const KeyboardStatusProvider = ({ children }: { children: ReactElement }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardStatusContext.Provider
      value={{
        keyboardStatus,
      }}
    >
      {children}
    </KeyboardStatusContext.Provider>
  );
};
