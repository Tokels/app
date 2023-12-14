import React, { useState } from 'react';
import { Text, ActivityIndicator, Pressable, Image } from 'react-native';
import SplitScreen from '../../components/containers/SplitScreen';
import { styles } from './styles';
import { Link } from 'expo-router';
import LoginForm from '../../components/LoginForm';
import { useKeyboardStatus } from '../../providers/KeyboardsStatusProvider';

const Register = () => {
  const [loading] = useState(false);
  const { keyboardStatus } = useKeyboardStatus();

  return loading ? (
    <SplitScreen>
      <ActivityIndicator />
    </SplitScreen>
  ) : (
    <SplitScreen weigths={[3, 2, 1]} styleParent={styles.rootContainer}>
      {!keyboardStatus ? (
        <Image
          className="w-3/4 h-3/4"
          resizeMode={'contain'}
          source={{
            uri: 'https://res.cloudinary.com/di6owew6n/image/upload/v1702297467/adaptive-icon_uhhmdv.png',
          }}
        />
      ) : (
        <></>
      )}
      <LoginForm isLogin={false} />
      <Link href={'/(public)/login'} asChild>
        <Pressable className={styles.link}>
          <Text>Already have an account?</Text>
        </Pressable>
      </Link>
    </SplitScreen>
  );
};

export default Register;
