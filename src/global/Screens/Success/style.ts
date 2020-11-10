import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultColors, metrics } from '../../../styles';

export default StyleSheet.create({
  main: {
    padding: metrics.basePadding,
  },
  container: {
    width: '100%',
    backgroundColor: defaultColors.primary,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  title: {
    fontSize: metrics.text.title.size,
    lineHeight: metrics.text.title.line,
    textAlign: 'center',
    color: defaultColors.primary,
  },
  message: {
    fontSize: metrics.text.normal.size,
    lineHeight: metrics.text.normal.line,
    marginBottom: metrics.baseMargin * 2,
    textAlign: 'center',
    color: defaultColors.white,
  },
  button: {
    flex: 1,
  },
  labelStyle: {
    fontSize: metrics.text.normal.size,
    textTransform: 'none',
    color: defaultColors.white,
  },

  closeButtonStyle: {
    width: wp('12%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
