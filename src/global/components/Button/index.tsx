import React, { useContext } from 'react';
import { Button as ButtonPaper, useTheme } from 'react-native-paper';
import { AppContext } from '../../../context/app';
import { defaultColors } from '../../../styles';
import styles from './style';

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  labelStyle?: object;
  style?: object;
  disabled?: boolean;
  onPress?: (payload: any) => void;
  color?: any;
}

const Button: React.FC<Props> = ({
  children,
  labelStyle,
  style,
  disabled,
  onPress,
  color,
}) => {
  const { darkTheme } = useContext(AppContext);
  const { colors } = useTheme();

  return (
    <ButtonPaper
      onPress={onPress}
      disabled={disabled}
      color={color ? color : colors.surface}
      style={[
        styles.button,
        {
          borderColor: darkTheme
            ? defaultColors.primary
            : defaultColors.secondary,
        },
        style,
      ]}
      labelStyle={[styles.labelStyle, labelStyle]}>
      {children}
    </ButtonPaper>
  );
};

export default Button;
