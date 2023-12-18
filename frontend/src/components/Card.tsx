import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
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
      {!/edit/.test(route.name) && (
        <Link href={'/(auth)/edit_card'} asChild>
          <Pressable>
            <Text>Edit Card</Text>
          </Pressable>
        </Link>
      )}
    </View>
  );
};

export default Card;
