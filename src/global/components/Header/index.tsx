import { StackHeaderProps } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import { globalStyle, metrics } from '../../../styles';
import styles from './style';

interface HeaderProps {
  title?: string;
  right?: (payload: any) => void;
  logo?: boolean;
}

const Header: React.FC<StackHeaderProps & HeaderProps> = ({
  navigation,
  title,
  right,
}) => {
  return (
    <View>
      <View style={[globalStyle.row, globalStyle.center, styles.header]}>
        <View style={[styles.left]}>
          <Button onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={metrics.baseIcon} />
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyle.textCenter, styles.title]}>{title}</Text>
        </View>
        <View style={[styles.right]}>{right}</View>
      </View>
    </View>
  );
};

export default Header;
