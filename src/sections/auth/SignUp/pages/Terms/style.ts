import { StyleSheet } from 'react-native';
import { defaultColors, metrics } from '../../../../../styles';

export default StyleSheet.create({
  terms: {
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  termsTitle: {
    color: defaultColors.black,
    fontSize: metrics.text.title.size,
    lineHeight: metrics.text.title.line,
    textAlign: 'center',
  },
  termsText: {
    color: defaultColors.black,
    fontSize: metrics.text.normal.size,
    lineHeight: metrics.text.normal.line,
    textAlign: 'center',
  },
});
