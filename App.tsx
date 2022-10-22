import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/store/configure-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {MainNavigator} from './src/navigators';
import {Text, TextInput} from 'react-native';
import { FETCH_HOME_DATA } from './src/store/types/home-types';
import { rootReducer, RootState } from './src/store/root-reducer';
import { createStore } from 'redux';



enableScreens();

// Disable font scalling
if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = true;
}

// Disable font scalling
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = true;
}



const App = () => {






  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
 
          <MainNavigator />

        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
