import React from 'react';
import type { FC } from 'react';
import { Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

const ModalScreen: FC = () => {
  return (
    <View>
      <Text>Modal</Text>
      <View />
      <EditScreenInfo />
    </View>
  );
};

export default ModalScreen;
