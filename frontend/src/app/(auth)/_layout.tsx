import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

const InsideLayout = () => {
  const { onLogout } = useAuth();
  return (
    <Tabs>
      <Tabs.Screen
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
      <Tabs.Screen name="edit_card" options={{ headerTitle: 'Edit Card' }} />
      <Tabs.Screen name="add_card" options={{ headerTitle: 'Edit Card' }} />
    </Tabs>
  );
};

export default InsideLayout;
