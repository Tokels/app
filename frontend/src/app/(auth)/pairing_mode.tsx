import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const PairingModePage = () => {
  return (
    <View>
      <Text className="text-2xl">Searching for card...</Text>
      <Link href={'/(auth)/found_card'} asChild>
        <Button title="Mocking Found Card!" />
      </Link>
    </View>
  );
};

export default PairingModePage;
