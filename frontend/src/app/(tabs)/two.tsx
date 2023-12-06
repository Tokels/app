import React from 'react';
import type { FC } from 'react';
import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';

const TabTwoScreen: FC = () => {
  return (
    <View>
      <Text>Tab Two</Text>
      <View />
      <EditScreenInfo />
    </View>
  );
};

export default TabTwoScreen;
