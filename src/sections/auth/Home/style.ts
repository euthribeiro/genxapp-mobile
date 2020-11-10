import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  text: {
    fontSize: metrics.text.normal.size,
    lineHeight: metrics.text.normal.line,
  },
  apresentationLogo: {
    width: wp('40%'),
    height: wp('40%'),
    marginVertical: metrics.baseMargin,
  },
  button: {
    marginVertical: metrics.baseMargin,
  },
  version: {
    fontSize: metrics.text.small.size,
    lineHeight: metrics.text.normal.line,
  },
});
