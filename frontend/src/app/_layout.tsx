import { Slot, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import {
  AuthProvider,
  CardDetailsProvider,
  KeyboardStatusProvider,
  LoadingProvider,
  ToastProvider,
} from '../providers';
import { useAuth } from '../providers/AuthProvider';

const InitialLayout = () => {
  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (token && !inAuthGroup) {
      router.replace('/(auth)/dashboard');
    } else if (!token && inAuthGroup) {
      router.replace('/(public)/login');
    }
  }, [token, initialized]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <KeyboardStatusProvider>
      <LoadingProvider>
        <ToastProvider>
          <AuthProvider>
            <CardDetailsProvider>
              <InitialLayout />
            </CardDetailsProvider>
          </AuthProvider>
        </ToastProvider>
      </LoadingProvider>
    </KeyboardStatusProvider>
  );
};

export default RootLayout;
