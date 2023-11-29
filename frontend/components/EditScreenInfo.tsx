import React from 'react';
import type { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SecureStore from './SecureStore';

const EditScreenInfo: FC = () => {
  return (
    <View>
      <SecureStore />
    </View>
  );
};

export default EditScreenInfo;
