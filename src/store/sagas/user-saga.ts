import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import {axiosInstance} from '../../config/axios-config';

import {navigate} from '../../navigators';

import {
  REGISTER_USER,
  RegisterUserAction,
  LOGIN_USER,
  LoginUserAction,
  LOGIN_USER_SUCCESS,
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  LoginUserSuccessAction,
  FetchUserDataSuccessAction,
  FetchUserDataAction,
  LoginUserErrorAction,
  LOGIN_USER_ERROR,
  RegisterUserSuccessAction,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  RegisterUserErrorAction,
  UserState,
  UpdateUserInfoSuccessAction,
  UPDATE_USER_INFO_SUCCESS,
  UpdateUserInfoErrorAction,
  UPDATE_USER_INFO_ERROR,
  UpdateUserInfoAction,
  UPDATE_USER_INFO,

} from '../types';

import {RootState} from '../root-reducer';
import { last } from 'lodash';

export function* userSaga() {
  yield all([

  ]);
}






















