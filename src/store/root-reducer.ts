import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';

import {

  userReducer,
} from './reducers';



import {UserState} from './types';

const userPersistConfig: PersistConfig<UserState> = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['type','accessToken', 'email', 'firstName', 'lastName'],
};


export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),

  
  
});

export type RootState = ReturnType<typeof rootReducer>;
