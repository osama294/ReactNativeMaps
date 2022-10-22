import React from 'react';
import {View, Text,Platform,Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import  {SearchInput} from '../search-input';
import { navigate } from '../../navigators';

interface Props {
  visible?:boolean;
  showSearchField?:boolean;
  title: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
}


export const HeaderAccountContent = ({title, topLeft, topRight, visible,showSearchField}: Props) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.mainContainer}>
<Text style={styles.title}>{title}</Text>

    </View>
  );
};
