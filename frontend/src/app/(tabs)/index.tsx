import React from 'react';
import type { FC } from 'react';
import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';

const TabOneScreen: FC = () => {
  return (
    <View>
      <Text>Tab One</Text>
      <View />
      <EditScreenInfo />
    </View>
  );
};

export default TabOneScreen;
