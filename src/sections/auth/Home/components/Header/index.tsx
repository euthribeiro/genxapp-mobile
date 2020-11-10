import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import { AppContext } from '../../../../../context/app';

import { defaultColors, globalStyle } from '../../../../../styles';
import styles from './style';

const Logo = require('../../../../../assets/images/logo.png');
const LogoDark = require('../../../../../assets/images/logo-dark.png');

const Header: React.FC = () => {
  const { darkTheme, IsDarkTheme } = React.useContext(AppContext);

  return (
    <View style={[globalStyle.row, globalStyle.space, globalStyle.alignCenter]}>
      <View style={[styles.right]}>
        <Image
          source={darkTheme ? LogoDark : Logo}
          style={[globalStyle.logo]}
        />
      </View>
      <View style={(globalStyle.main, globalStyle.center)} />
      <View style={styles.right} />
    </View>
  );
};

export default Header;
