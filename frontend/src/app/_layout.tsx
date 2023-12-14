import { Slot } from 'expo-router';
import React from 'react';
import { AuthProvider, KeyboardStatusProvider, LoadingProvider } from '../providers';

const RootLayout = () => {
  return (
    <LoadingProvider>
      <KeyboardStatusProvider>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </KeyboardStatusProvider>
    </LoadingProvider>
  );
};

export default RootLayout;
