import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import metrics from './metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: metrics.basePadding,
  },
  contentWithoutPadding: {
    flexGrow: 1,
  },
  contentWithoutPaddingHorizontal: {
    flexGrow: 1,
    paddingVertical: metrics.basePadding,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  logo: {
    width: wp('20%'),
    height: wp('20%'),
  },
  space: {
    justifyContent: 'space-between',
    width: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
  marg: {
    margin: metrics.baseMargin,
  },
  margY: {
    marginVertical: metrics.baseMargin,
  },
  margX: {
    marginHorizontal: metrics.baseMargin,
  },
  margAuto: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  transparencyView: {
    backgroundColor: '#0005',
  },
  icon: {
    fontSize: metrics.baseIcon,
  },
});
