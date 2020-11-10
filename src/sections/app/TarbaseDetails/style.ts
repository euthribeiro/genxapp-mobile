import { StyleSheet } from 'react-native';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  label: {
    fontSize: metrics.text.title.size,
  },
  text: {
    fontSize: metrics.text.normal.size,
  },
  item: {
    marginVertical: metrics.baseMargin,
  },
});
