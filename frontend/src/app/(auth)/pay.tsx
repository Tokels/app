import React from 'react';
import { Button, Text, View } from 'react-native';
import Card from '../../components/Card';
import { cardDetailsInit, useCardDetails } from '../../providers/CardDetailsProvider';
import { Link } from 'expo-router';

const PayPage = () => {
  const { cardDetails } = useCardDetails();
  return (
    <View>
      {JSON.stringify(cardDetails) === JSON.stringify(cardDetailsInit) ? (
        <View>
          <Text className="text-2xl">Ooops!</Text>
          <Text className="text-2xl">You don&apos;t have a card yet.</Text>
          <Link href="/(auth)/add_card" asChild>
            <Button title="Add a card" />
          </Link>
        </View>
      ) : (
        <Card />
      )}
    </View>
  );
};

export default PayPage;
