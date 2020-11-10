import * as React from 'react';
import { Modal, View, Animated, Easing } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { defaultColors, globalStyle } from '../../../styles';
import styles from './style';

interface LoadingProps {
  visible: boolean;
  message: string;
  title: string;
  cancel: boolean;
  callback: () => void;
  hide: (value: boolean) => void;
}

const LoadingView: React.FC<LoadingProps> = (props) => {
  const { visible, message, title, hide, callback, cancel } = props;

  const animation = React.useRef(new Animated.Value(0)).current;

  const anime = React.useCallback(
    (value) => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: value ? 1 : 0,
          useNativeDriver: true,
          duration: 250,
          easing: Easing.linear,
        }),
      ]).start(() => {
        if (!value) {
          hide(value);
          if (callback) {
            callback();
          }
        }
      });
    },
    [animation, callback, hide]
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onShow={() => anime(true)}
      onDismiss={() => anime(false)}>
      <View style={[globalStyle.transparencyView, globalStyle.main]}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [500, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={[styles.message]}>{message}</Text>
          <View style={[globalStyle.row]}>
            {cancel && (
              <Button
                color={defaultColors.primary}
                onPress={() => anime(false)}
                style={[styles.button]}
                labelStyle={[styles.labelStyle]}>
                Cancelar
              </Button>
            )}
            <Button
              color={defaultColors.primary}
              onPress={() => {
                anime(false);
              }}
              style={[styles.button]}
              labelStyle={[styles.labelStyle]}>
              OK
            </Button>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default LoadingView;
