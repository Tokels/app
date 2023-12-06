import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import SecureStore from './SecureStore';

const EditScreenInfo: FC = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <SecureStore />
    </View>
  );
};

export default EditScreenInfo;
