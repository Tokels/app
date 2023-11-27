import { Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>
      <View />
      <EditScreenInfo path="app/modal.tsx" />
    </View>
  );
}
