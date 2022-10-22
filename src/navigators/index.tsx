import React, {createRef, useEffect, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import {AppStackNavigator} from './app-stack-navigator';
import {SplashScreen} from '../screens';
import {HeaderBackImage} from '../components';
import {colors} from '../config/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params?: {}) {
  navigationRef.current?.navigate(name, params);
}

const RootStack = createStackNavigator();

export const MainNavigator = () => {
  const [showSplash, setShowSplash] = useState<Boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    StatusBar.setHidden(false);

    setInterval(() => {
      setShowSplash(false);
    }, 3000);
  });

  if (showSplash) {
    return <SplashScreen />;
  }


  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        
      />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{
            headerBackTitleVisible: false,
          }}>
          <RootStack.Screen
            name="AppStack"
            component={AppStackNavigator}
            options={{headerShown: false}}
          />
       
        </RootStack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </>
  );
};
