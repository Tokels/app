import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const ConnectCardsPage = () => {
  return (
    <View>
      <Text className="w-full bg-slate-400 aspect-square">Placeholder for image</Text>
      <Link href="/(auth)/pairing_mode" asChild>
        <Button title="Enter pairing mode" />
      </Link>
    </View>
  );
};

export default ConnectCardsPage;
