import React from 'react';
import {View, Text,Platform,Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import  {SearchInput} from '../search-input';
import { navigate } from '../../navigators';
import { head } from 'lodash';
import { heightConverter,heightPercentageToDP, widthConverter } from '../../utils';

interface Props {
  visible?:boolean;
  showSearchField?:boolean;
  showBottomSheet?:boolean;
  title: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
}


export const HeaderWithTopContent = ({navigation,title, topLeft, topRight, visible,showSearchField,showBottomSheet}: Props) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.mainContainer}>

<View>
 {visible &&
  <MaterialIcons name="arrow-back-ios" color={"black"} size={heightPercentageToDP(2.5)}  />
 }

  </View>
<View>
  {showSearchField &&
      <View>
          <SearchInput iconPosition="right" showBottomSheet = {showBottomSheet}/>
        </View>
}
      
      
      </View>

    </View>
  );
};
