import React from 'react';
import type { FC } from 'react';
import { Stack } from 'expo-router';

const RootLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
};

export default RootLayout;
