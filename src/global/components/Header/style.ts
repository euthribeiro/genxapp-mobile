import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  header: {
    height: hp('9%'),
  },
  title: {
    fontSize: metrics.text.normal.size,
    lineHeight: metrics.text.normal.line,
  },
  right: {
    width: wp('20%'),
  },
  left: {
    width: wp('20%'),
  },
  logo: {
    width: wp('30%'),
    height: wp('30%'),
  },
});
