import { StyleSheet } from 'react-native';
import { defaultColors, metrics } from '../../../styles';

export default StyleSheet.create({
  labelStyle: {
    fontSize: metrics.text.small.size,
    lineHeight: metrics.text.small.line,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: metrics.baseRadius,
    borderWidth: 3,
    borderColor: defaultColors.secondary,
    padding: metrics.basePadding / 4,
  },
});
