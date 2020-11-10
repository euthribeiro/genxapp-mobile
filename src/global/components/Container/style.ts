import { StyleSheet } from 'react-native';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin * 3,
    padding: metrics.basePadding,
    borderTopLeftRadius: metrics.baseRadius,
    borderTopRightRadius: metrics.baseRadius,
  },
  title: {
    textAlign: 'center',
    fontSize: metrics.text.title.size,
    lineHeight: metrics.text.title.line,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },
});
