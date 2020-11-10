import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultColors, metrics } from '../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultColors.secondary,
  },
  logo: {
    width: wp('40%'),
    height: wp('40%'),
    marginVertical: metrics.baseMargin,
  },
});
