import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const FoundCardPage = () => {
  const [spendLimit, setSpendLimit] = useState('');
  const [validUntil, setValidUntil] = useState('');
  return (
    <View>
      <Text className="text-2xl">Found card!</Text>
      <TextInput
        placeholder="Spending limit"
        value={spendLimit}
        onChangeText={setSpendLimit}
        keyboardType="numeric"
      />
      <TextInput placeholder="Valid until" value={validUntil} onChangeText={setValidUntil} />
    </View>
  );
};

export default FoundCardPage;
