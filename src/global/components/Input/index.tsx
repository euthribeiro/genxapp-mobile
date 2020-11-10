import * as React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './style';

const Input: React.FC<T> = React.forwardRef((props, ref) => {
  const { style } = props;

  return (
    <TextInput
      {...props}
      autoCapitalize="none"
      ref={ref}
      style={[styles.input, style]}
    />
  );
});

export default Input;
