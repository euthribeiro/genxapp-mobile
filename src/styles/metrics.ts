import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  baseMargin: wp('2.5%'),
  basePadding: wp('5%'),
  baseRadius: 20,
  screenWidth: '100%',
  screenHeight: '100%',
  text: {
    small: {
      size: wp('4%'),
      line: wp('4%') * 1.5,
    },
    normal: {
      size: wp('5%'),
      line: wp('5%') * 1.5,
    },
    title: {
      size: wp('6%'),
      line: wp('6%') * 1.5,
    },
    big: {
      size: wp('7%'),
      line: wp('7%') * 1.5,
    },
  },
  baseIcon: wp('9%'),
  baseLottieWidth: wp('80%'),
  baseLottieHeight: wp('100%'),
};
