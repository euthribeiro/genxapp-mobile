import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { globalStyle, metrics } from '../../../styles';

const styles = StyleSheet.create({
  label: {
    fontSize: metrics.text.normal.size,
    lineHeight: metrics.text.normal.line,
  },
});

interface CheckBoxProps {
  onValueChange: (payload: boolean) => void;
  checked?: boolean;
  label?: string;
  style?: object;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  onValueChange,
  checked = false,
  label,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => (onValueChange ? onValueChange(!checked) : null)}
      style={[globalStyle.row, globalStyle.alignCenter, style]}>
      <Checkbox status={checked ? 'checked' : 'unchecked'} />
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
