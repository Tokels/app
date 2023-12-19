import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useCardDetails } from '../providers/CardDetailsProvider';

const Card = () => {
  const route = useRoute();
  const { cardDetails } = useCardDetails();
  return (
    <View>
      <View className=" bg-slate-500 aspect-ratio-card w-full">
        <Text className="text-xl">Placeholder for Card</Text>
        <Text>Card details:</Text>
        <Text>{cardDetails?.cardNumber || 'XXXX-XXXX-XXXX-XXXX'}</Text>
        <Text>{cardDetails?.cardHolder || 'Name Namesson'}</Text>
        <View className="flex-row">
          <Text>{cardDetails?.cardEndDateMM || 'MM'}</Text>
          <Text>/</Text>
          <Text>{cardDetails?.cardEndDateYY || 'YY'}</Text>
        </View>
        <Text>{cardDetails?.cardCvv || '***'}</Text>
      </View>
      {/dashboard/.test(route.name) && (
        <Link href={'/(auth)/edit_card'} asChild>
          <Button title="Edit Card" />
        </Link>
      )}
    </View>
  );
};

export default Card;
