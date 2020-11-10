import * as React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { defaultColors, globalStyle } from '../../../styles';
import styles from './style';

interface SuccessProps {
  visible: boolean;
  message: string;
  hide: () => void;
}

const Success: React.FC<SuccessProps> = (props) => {
  const { visible, message, hide } = props;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={[
          globalStyle.transparencyView,
          globalStyle.main,
          globalStyle.center,
          styles.main,
        ]}>
        <View style={[styles.container]}>
          <View style={[globalStyle.alignEnd]}>
            <TouchableOpacity
              style={[styles.closeButtonStyle]}
              onPress={() => hide()}>
              <Icon
                name="close"
                style={globalStyle.icon}
                color={defaultColors.white}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.message]}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Success;
