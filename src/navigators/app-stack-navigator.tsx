import React, { useEffect } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Dimensions, View, Platform, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, typography} from '../config/theme';

import {HeaderBackImage, SearchInput,HeaderBackImage2, HeaderBackImage3} from '../components';

import {RootState} from '../store/root-reducer';

import {
  LoginScreen, MapScreen,
 

  
} from '../screens';

import {HomeTabNavigator} from './home-tab-navigator';

import {AppStackParamList} from './routes';


const {width} = Dimensions.get('window');

const AppStack = createStackNavigator<AppStackParamList>();

// Screens accessible by everyone
const commonScreens = [
  {
    name: 'Home',
    component: HomeTabNavigator,
    options: {
      headerShown: false,
    },
  },
  
  {
    name: 'MapScreen',
    component: MapScreen,
    options: {
      headerShown: true,
      title: 'MAPS',
      headerTitleAlign: 'center',
      headerTintColor: colors.black,
      headerBackImage: () => <HeaderBackImage color={colors.ternary} />,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height : 90,

      },
    },
  },

];


const authScreens = [


    
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: true,
    
      headerTitleAlign: 'center',
      headerTintColor: colors.light,
      headerBackImage: () => <HeaderBackImage color={colors.ternary} />,
      headerStyle: {
        backgroundColor: colors.ternary,
        elevation: 0,
        shadowOpacity: 0,
      },
    },
  },
  
 
];

export const AppStackNavigator = () => {
  const {accessToken} = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();


  return (
   
    <AppStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: {
          ...typography.p3,
          fontWeight : '600'
          
        },
      }}
      initialRouteName={'Login'}>
      {[
        // Use the screens normally
        ...commonScreens,
        // Use some screens conditionally based on some condition
        ...(accessToken ? commonScreens : authScreens),
      ].map((item) => (
        <AppStack.Screen
          key={item.name}
          name={item.name as any}
          component={item.component}
          options={item.options as StackNavigationOptions}
        />
      ))}
    </AppStack.Navigator>
  );
};
