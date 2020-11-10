import * as React from 'react';
import { View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, useTheme } from 'react-native-paper';
import { globalStyle } from '../../../styles';
import styles from './style';

interface ListItemProps {
  title: string;
  body: string;
  icon?: any;
}

const ListItem: React.FC<ListItemProps> = ({ title, body, icon }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[globalStyle.row, styles.item, { backgroundColor: colors.text }]}>
      {icon}
      <View>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
      <Entypo
        name="chevron-right"
        style={[globalStyle.icon]}
        color={colors.background}
      />
    </View>
  );
};

export default ListItem;
