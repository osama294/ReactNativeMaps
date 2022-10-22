import React, { useEffect } from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, Image} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


import {RootState} from '../store/root-reducer';

import {colors, typography} from '../config/theme';

import {
  MapScreen
} from '../screens';

import {TabParamList, AppStackParamList, RootStackParamList} from './routes';


const Tab = createBottomTabNavigator<TabParamList>();

type HomeTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  CompositeNavigationProp<
    StackNavigationProp<AppStackParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;

interface Props {
  navigation: HomeTabNavigationProp;
}

export const HomeTabNavigator = ({navigation}: Props) => {
  // const {accessToken} = useSelector((state: RootState) => state.user);


const accessToken = "12345678"

  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,

        
        labelStyle: {
          ...typography.p5,
        
        },
        tabStyle: {
          paddingVertical: 10,
        },
        style: {
          height: 80 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        safeAreaInsets: {bottom: 0},
      }}>
        
    
 
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color,size}) => (
            <Ionicons name="map" color={color} size={size} />
          ),
          tabBarButton: (props) => {
            return accessToken ? (
              <TouchableOpacity {...props} />
            ) : (
              <TouchableOpacity
                {...props}
                onPress={() =>
                  navigation.navigate('Login')
                }
              />
            );
          },
        }}
     
      />
  
         
   
    </Tab.Navigator>
  );
};
