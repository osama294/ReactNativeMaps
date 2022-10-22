import React from 'react';
import {KeyboardAvoidingView, StatusBar, ViewStyle} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

interface Props {
  children: React.ReactNode;
  style: ViewStyle;
}

export const CustomKeyboardAvoidingView = ({children, style}: Props) => {
  const headerHeight: number = useHeaderHeight();
  const currentHeight: number = StatusBar?.currentHeight ?? 0;

  return (
    <KeyboardAvoidingView
      style={style}
      behavior="padding"
      keyboardVerticalOffset={headerHeight + currentHeight}>
      {children}
    </KeyboardAvoidingView>
  );
};
