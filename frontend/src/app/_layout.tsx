import { Slot } from 'expo-router';
import React from 'react';
import { AuthProvider, KeyboardStatusProvider, LoadingProvider } from '../providers';
import { ErrorProvider } from '../providers/ErrorProvider';

const RootLayout = () => {
  return (
    <LoadingProvider>
      <ErrorProvider>
        <KeyboardStatusProvider>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </KeyboardStatusProvider>
      </ErrorProvider>
    </LoadingProvider>
  );
};

export default RootLayout;
