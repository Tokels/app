import { Slot } from 'expo-router';
import React from 'react';
import { AuthProvider, KeyboardStatusProvider, LoadingProvider, ToastProvider } from '../providers';

const RootLayout = () => {
  return (
    <LoadingProvider>
      <ToastProvider>
        <KeyboardStatusProvider>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </KeyboardStatusProvider>
      </ToastProvider>
    </LoadingProvider>
  );
};

export default RootLayout;
