import * as React from 'react';
import { Modal, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import { globalStyle } from '../../../styles';

interface LoadingProps {
  visible: boolean;
}

const LoadingView: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
        style={[{ backgroundColor: '#fff5' }, globalStyle.main]}>
        <LottieView
          source={require('../../../assets/json/loading.json')}
          autoPlay
          loop
        />
      </BlurView>
    </Modal>
  );
};

export default LoadingView;
