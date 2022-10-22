import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../../config/theme';

import styles from './style';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  borderRadius?: number;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  outlined?: boolean;
  borderColor?:string;
  disabled?: boolean;
  fontWeight?: string;
}

export const Button = ({
  children,
  buttonColor = colors.primary,
  textColor = '#ffffff',
  borderColor = colors.primary,
  fontSize = 18,
  buttonStyle,
  containerStyle,
  outlined,
  disabled,
  fontWeight,
  ...props
}: Props) => {
  const computedButtonStyle: {
    backgroundColor: string;
    borderColor: string;
    opacity: number;
  } = {
    backgroundColor: outlined
      ? 'transparent'
      : disabled
      ? colors.lightGrey
      : buttonColor,
    borderColor: disabled ? colors.lightGrey : buttonColor,
    opacity: disabled ? 0.7 : 1,
  };

  const computedButtonTextStyle: {
    color: string;
    fontSize: number;
    fontWeight: string;
  } = {
    fontSize,
    color: outlined ? buttonColor : textColor,
    fontWeight : fontWeight,
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity {...props}>
          <View
            style={[styles.button, computedButtonStyle, buttonStyle]}
            accessible>
            <Text style={[styles.buttonText, computedButtonTextStyle]}>
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
