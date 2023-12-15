import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../providers/AuthProvider';
import { Text } from 'react-native';

const Page = () => {
  const { token } = useAuth();
  return !token ? <Redirect href={'/login'} /> : <Text>You are logged in!</Text>;
};

export default Page;
