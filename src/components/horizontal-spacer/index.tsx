import React from 'react';
import {View, ViewStyle} from 'react-native';

import {spacings} from '../../config/theme';

interface Props {
  size?: number;
}

export const HorizontalSpacer = ({size = spacings.xs}: Props) => {
  return <View style={{width: size} as ViewStyle} />;
};
