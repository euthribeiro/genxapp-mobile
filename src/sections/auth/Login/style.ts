import { StyleSheet } from 'react-native';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  marg: {
    marginVertical: metrics.baseMargin,
  },
  forgetPassText: {
    fontSize: metrics.text.normal.size,
    marginLeft: metrics.baseMargin,
  },
});
