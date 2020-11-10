import {
  DefaultTheme as DefaultPaperTheme,
  DarkTheme as DarkPaperTheme,
} from 'react-native-paper';
import {
  DefaultTheme as DefaultNavigationTheme,
  DarkTheme as DarkNavigationTheme,
} from '@react-navigation/native';

const PRIMARY = '#F96432';
const SECONDARY = '#153254';
const TERTIARY = '#5C7591';
const GRAY = '#EBECF1';
const WHITE = '#FFFFFF';
const BLACK = '#000000';

export const DefaultTheme = {
  ...DefaultNavigationTheme,
  ...DefaultPaperTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    ...DefaultPaperTheme.colors,
    primary: PRIMARY,
    accent: SECONDARY,
    background: WHITE,
    backdrop: SECONDARY,
    surface: PRIMARY,
    text: BLACK,
    tab: SECONDARY,
  },
};

export const DarkTheme = {
  ...DarkNavigationTheme,
  ...DarkPaperTheme,
  colors: {
    ...DarkNavigationTheme.colors,
    ...DarkPaperTheme.colors,
    primary: PRIMARY,
    accent: PRIMARY,
    background: SECONDARY,
    backdrop: WHITE,
    surface: WHITE,
    text: WHITE,
    tab: PRIMARY,
  },
};

export default {
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
  gray: GRAY,
  white: WHITE,
  black: BLACK,
};
