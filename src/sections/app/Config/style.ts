import { StyleSheet } from 'react-native';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  item: {
    borderRadius: metrics.baseRadius / 2,
    marginTop: metrics.baseMargin * 2,
  },
  titleItemStyle: {},
  listSection: {},
  switchText: {
    fontSize: metrics.text.small.size,
    lineHeight: metrics.text.small.line,
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  switchView: {
    marginTop: metrics.baseMargin,
  },
});
