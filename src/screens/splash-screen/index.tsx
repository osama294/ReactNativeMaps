import React, {useEffect} from 'react';
import {StatusBar, View,Image, ImageBackground,Text} from 'react-native';
import { LinearGradient } from 'react-native-svg';

import {useDispatch} from 'react-redux';






import styles from './style';

export const SplashScreen = () => {




  return (
    <>
      <View

        style={styles.backgroundContainer}>
        
          <View style={styles.contentContainer}>
      
            
          <Text style={styles.splashText}>
                  BV
                </Text>
                
          </View>
    
      </View>
    </>
  );
};
