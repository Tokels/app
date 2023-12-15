import { Stack } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

const InsideLayout = () => {
  const { onLogout } = useAuth();
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: 'My Profile',
          headerRight: () => (
            <Pressable onPress={onLogout}>
              <Text>Log Out</Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default InsideLayout;
