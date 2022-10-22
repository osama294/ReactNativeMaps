import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import {colors} from '../../config/theme';
import styles from './style';
import { heightConverter, heightPercentageToDP } from '../../utils';

interface Props {
  color?: string;
}

export const HeaderBackImage = ({color = colors.ternary}: Props) => {
  return (
<View style  = {styles.button}>
  <MaterialCommunityIcons name="chevron-left" color={color} size={heightPercentageToDP(3.6)}/>
  </View>
  );
};

export const HeaderBackImage3 = ({color = colors.ternary}: Props) => {
  return (
<View style  = {styles.button3}>
  <MaterialCommunityIcons name="chevron-left" color={"white"} size={heightPercentageToDP(3.6)}/>
  </View>
  );
};

export const HeaderBackImage2 = ({color = colors.ternary}: Props) => {
  return (
<View style  = {styles.button2}>
<MaterialCommunityIcons name="keyboard-backspace" color={color}size={heightPercentageToDP(3.2)}/>
  </View>
  );
};

