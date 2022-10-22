import React from 'react';
import {View} from 'react-native';

import {spacings} from '../../config/theme';

interface Props {
  size?: number;
}

export const VerticalSpacer = ({size = spacings.xs}: Props) => {
  return <View style={{height: size}} />;
};
