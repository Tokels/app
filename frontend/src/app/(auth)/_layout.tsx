import { Tabs } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

const InsideLayout = () => {
  const { onLogout } = useAuth();
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerTitle: 'My Card',
          headerRight: () => <Button title="Log Out" onPress={onLogout} />,
        }}
      />
      <Tabs.Screen name="edit_card" options={{ headerTitle: 'Edit Card' }} />
      <Tabs.Screen name="add_card" options={{ headerTitle: 'Add Card' }} />
      <Tabs.Screen name="connect_cards" options={{ headerTitle: 'Connect Cards' }} />
      <Tabs.Screen name="pairing_mode" options={{ headerTitle: 'Pairing Mode' }} />
      <Tabs.Screen name="organise_groups" options={{ headerTitle: 'Organise Card Groups' }} />
      <Tabs.Screen name="found_card" options={{ headerTitle: 'Pairing Mode' }} />
    </Tabs>
  );
};

export default InsideLayout;
