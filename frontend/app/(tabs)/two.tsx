import React from 'react';
import type { FC } from 'react';
import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';

const TabTwoScreen: FC = () => {
  return (
    <View>
      <Text>Tab Two</Text>
      <View />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
};

export default TabTwoScreen;
