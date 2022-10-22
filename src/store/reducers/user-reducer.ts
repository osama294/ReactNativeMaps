import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CLEAR_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SOCIAL_LOGIN_USER,
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_ERROR,
  UPDATE_USER_INFO_SUCCESS,
  UserActionTypes,
  UserState,
} from '../types';

const initialState: UserState = {
  type : null,
  accessToken: null,
  email: null,
  firstName: null,
  lastName: null,
  phone: null,
  username: null,
  companyName: null,
  companyPhone: null,
  companyWebsite: null,
  companyAddress: null,
  bio: null,
  isLogout: false,
  isLoggingInUser: false,
  isRegisteringUser: false,
  isForgettingPassword: false,
  isChangingPassword: false,
  isUpdatingUserInfo: false
 
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes,
): UserState => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isRegisteringUser: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        type : action.payload.type,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone : action.payload.phone,
        username : action.payload.username,
        companyAddress: action.payload.companyAddress,
        companyName: action.payload.companyName,
        companyPhone: action.payload.companyPhone,
        companyWebsite : action.payload.companyWebsite,
        bio : action.payload.bio,
        isRegisteringUser: false,

      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isRegisteringUser: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        
        isLoggingInUser: true,
        isLogout: false,
      };
    case LOGIN_USER_SUCCESS:
      
      return {
        ...state,
        accessToken: action.payload.accessToken,
        type : action.payload.type,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone : action.payload.phone,
        username : action.payload.username,
        companyAddress: action.payload.companyAddress,
        companyName: action.payload.companyName,
        companyPhone: action.payload.companyPhone,
        companyWebsite : action.payload.companyWebsite,
        bio : action.payload.bio,
        isLoggingInUser: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoggingInUser: false,
      };
    case SOCIAL_LOGIN_USER:
      return {
        ...state,
        isLoggingInUser: true,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        isForgettingPassword: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isForgettingPassword: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        isChangingPassword: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isChangingPassword: false,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
     
        
      
      };
    case CLEAR_USER_DATA:
      return {
        ...initialState,
        isLogout: true,
      };

    case UPDATE_USER_INFO:
      return {
        ...state,
        isUpdatingUserInfo: true,
      };
    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        isUpdatingUserInfo: false,
      };
    case UPDATE_USER_INFO_ERROR:
      return {
        ...state,
        isUpdatingUserInfo: false,
      };
      
    default:
      return state;
  }
};
