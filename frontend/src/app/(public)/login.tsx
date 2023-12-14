import React from 'react';
import { Text, Pressable, ActivityIndicator, Image } from 'react-native';
import SplitScreen from '../../components/containers/SplitScreen';
import { Link } from 'expo-router';
import { styles } from './styles';
import { useKeyboardStatus } from '../../providers/KeyboardsStatusProvider';
import LoginForm from '../../components/LoginForm';
import { useLoading } from '../../providers/LoadingProvider';

const Login = () => {
  const { keyboardStatus } = useKeyboardStatus();
  const { loading } = useLoading();

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
      <LoginForm isLogin={true} />
      <Link href={'/(public)/register'} asChild>
        <Pressable className={styles.link}>
          <Text>Create new account</Text>
        </Pressable>
      </Link>
    </SplitScreen>
  );
};

export default Login;
