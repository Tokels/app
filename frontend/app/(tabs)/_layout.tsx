import React from 'react';
import type { FC } from 'react';
import { Tabs } from 'expo-router';

const TabLayout: FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
