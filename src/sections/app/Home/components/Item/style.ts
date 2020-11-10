import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../styles';

export default StyleSheet.create({
  item: {
    borderRadius: 5,
    padding: metrics.basePadding / 2,
    marginTop: metrics.baseMargin * 2,
  },
  title: {
    fontSize: metrics.text.title.size,
  },
});
