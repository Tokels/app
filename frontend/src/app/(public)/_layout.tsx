import React from 'react';
import { Stack } from 'expo-router';

const Page = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="register" options={{ headerTitle: 'Create Account' }} />
    </Stack>
  );
};

export default Page;
