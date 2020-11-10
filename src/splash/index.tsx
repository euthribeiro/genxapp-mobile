import * as React from 'react';
import { Animated, View } from 'react-native';
import styles from './style';

interface Props {
  end: (payload: any) => void;
}

const SplashScreen: React.FC<Props> = ({ end }) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  const anime = React.useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 3,
      }
    ).start(() => end(true));
  }, [animation]);

  React.useEffect(() => {
    anime();
  }, [anime]);

  return (
    <View style={[styles.container]}>
      <Animated.Image
        style={[
          styles.logo,
          {
            transform: [
              {
                rotateZ: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '90deg'],
                }),
              },
              {
                rotateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
        source={require('../assets/images/icon-dark.png')}
      />
    </View>
  );
};

export default SplashScreen;
