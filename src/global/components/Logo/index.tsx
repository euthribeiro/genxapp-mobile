import * as React from 'react';
import { Image } from 'react-native';
import { AppContext } from '../../../context/app';
import { globalStyle } from '../../../styles';
import styles from './style';

const LogoDefault = require('../../../assets/images/logo.png');
const LogoDark = require('../../../assets/images/logo-dark.png');

interface LogoProps {
  style?: object;
  width?: number;
  height?: number;
  center?: boolean;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  const { width, height, style, center, ...prop } = props;
  const { darkTheme } = React.useContext(AppContext);

  return (
    <Image
      source={darkTheme ? LogoDark : LogoDefault}
      style={[styles.image, style, center ? globalStyle.margAuto : null]}
      width={width}
      height={height}
      {...prop}
    />
  );
};

export default Logo;
