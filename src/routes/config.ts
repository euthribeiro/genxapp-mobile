import { CardStyleInterpolators } from '@react-navigation/stack';
import { Easing, Platform } from 'react-native';

const closeConfig = {
  animation: 'timing',
  useNativeDriver: true,
  config: {
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  },
};

export const Vertical = {
  gestureEnabled: Platform.OS === 'ios',
  gestureDirection: 'vertical',
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  transitionSpec: {
    open: closeConfig,
    close: closeConfig,
  },
};

export const Horizontal = {
  gestureEnabled: Platform.OS === 'ios',
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: closeConfig,
    close: closeConfig,
  },
};
