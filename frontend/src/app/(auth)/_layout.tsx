import { Stack } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

const InsideLayout = () => {
  const { onLogout } = useAuth();
  return (
    <Stack>
      <Stack.Screen
        name="dashboard"
        options={{
          headerTitle: 'My Card',
          headerRight: () => (
            <Pressable onPress={onLogout}>
              <Text>Log Out</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="edit_card" options={{ headerTitle: 'Edit Card' }} />
      <Stack.Screen name="add_card" options={{ headerTitle: 'Edit Card' }} />
    </Stack>
  );
};

export default InsideLayout;
