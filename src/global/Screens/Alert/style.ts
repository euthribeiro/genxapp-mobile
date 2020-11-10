import { StyleSheet } from 'react-native';
import { defaultColors, metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: defaultColors.white,
    borderTopLeftRadius: metrics.baseRadius,
    borderTopRightRadius: metrics.baseRadius,
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
    marginVertical: metrics.baseMargin,
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  labelStyle: {
    fontSize: metrics.text.normal.size,
    textTransform: 'none',
    color: defaultColors.secondary,
  },
});
