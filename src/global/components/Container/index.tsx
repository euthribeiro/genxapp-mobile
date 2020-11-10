import * as React from 'react';
import { Platform, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, useTheme, Button } from 'react-native-paper';
import { globalStyle } from '../../../styles';

import styles from './style';
import { NavigationContext } from '@react-navigation/native';

interface ContainerProps {
  back?: boolean;
  backAndClose?: boolean;
  close?: boolean;
  title?: string;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const { back, close, backAndClose, title } = props;
  const { colors } = useTheme();
  const navigation = React.useContext(NavigationContext);

  return (
    <View
      style={[
        globalStyle.main,
        styles.container,
        { backgroundColor: colors.backdrop },
      ]}>
      <View
        style={[
          globalStyle.row,
          globalStyle.space,
          !back && globalStyle.justifyEnd,
        ]}>
        {back && (
          <Button onPress={() => navigation?.goBack()}>
            <Ionicons
              name={
                Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'
              }
              style={[globalStyle.icon]}
              color={colors.background}
            />
          </Button>
        )}
        {(close || backAndClose) && (
          <Button
            onPress={() =>
              backAndClose
                ? navigation?.navigate('Início')
                : navigation?.popToTop()
            }>
            <FontAwesome
              name="close"
              style={[globalStyle.icon]}
              color={colors.background}
            />
          </Button>
        )}
      </View>
      {title && title !== '' && (
        <Text style={[styles.title, { color: colors.background }]}>
          {title}
        </Text>
      )}
      <View style={[globalStyle.main]}>{children}</View>
    </View>
  );
};

export default Container;
