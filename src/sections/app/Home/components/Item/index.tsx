import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import { globalStyle } from '../../../../../styles';
import styles from './style';

interface ItemProps {
  name: string;
  onPress?: () => void;
}

const Item: React.FC<ItemProps> = ({ name, ...props }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.item,
        globalStyle.row,
        globalStyle.alignCenter,
        globalStyle.space,
        { backgroundColor: colors.onBackground },
      ]}>
      <View>
        <Text style={[styles.title, { color: colors.background }]}>{name}</Text>
        <Text style={[{ color: colors.background }]}>
          Toque para acessar essa lista
        </Text>
      </View>
      <Icon name="chevron-right" style={globalStyle.icon} />
    </TouchableOpacity>
  );
};

export default Item;
