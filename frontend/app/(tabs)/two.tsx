import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Tab Two</Text>
      <View />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
