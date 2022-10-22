import React from 'react';
import {View} from 'react-native';

import {colors} from '../../config/theme';

interface Props {
  width?: number;
  color?: string;
}

export const HorizontalRule = ({
  width = 1,
  color = colors.lightGrey,
}: Props) => {
  return (
    <View
      style={{
        borderTopWidth: width,
        borderColor: color,
      }}
    />
  );
};
