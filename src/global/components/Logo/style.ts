import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { metrics } from '../../../styles';

export default StyleSheet.create({
  image: {
    width: wp('30%'),
    height: wp('30%'),
    marginVertical: metrics.baseMargin,
  },
});
