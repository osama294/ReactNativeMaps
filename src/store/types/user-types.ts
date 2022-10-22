import {FormikHelpers} from 'formik';

export interface UserState {
  type : string | null;
  accessToken: string | null;
  phone:string | null;
  username:string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  companyName: string| null;
  companyPhone: string| null;
  companyWebsite: string| null;
  companyAddress: string| null;
  bio: string| null;
  isLogout: boolean;
  isRegisteringUser: boolean;
  isLoggingInUser: boolean;
  isForgettingPassword: boolean;
  isChangingPassword: boolean;
  isUpdatingUserInfo: boolean;
}

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const SOCIAL_LOGIN_USER = 'SOCIAL_LOGIN_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_ERROR = 'UPDATE_USER_INFO_ERROR';

export interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: {
    firstname: string;
    lastname: string
    email: string;
    password: string;
    passwordConfirmation: string;
    phone : string;
    role : string;
    
  };
  formikActions: FormikHelpers<{}>;
}

export interface RegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS
  payload: {
    accessToken: string;
    type : string;
    phone:string;
    username:string;
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    companyPhone: string;
    companyAddress: string;
    companyWebsite:string;
    bio: string;
  };

}

export interface RegisterUserErrorAction {
  type: typeof REGISTER_USER_ERROR;
}

export interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: {
    email: string;
    password: string;
  };
  formikActions: FormikHelpers<{}>;
}

export interface LoginUserSuccessAction {

  type: typeof LOGIN_USER_SUCCESS;
  payload: {
    accessToken: string;
    type : string;
    phone:string;
    username:string;
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    companyPhone: string;
    companyAddress: string;
    companyWebsite:string;
    bio: string;
  };
}

export interface LoginUserErrorAction {
  type: typeof LOGIN_USER_ERROR;
}

export interface FetchUserDataAction {
  type: typeof FETCH_USER_DATA;
}

export interface FetchUserDataSuccessAction {
  type: typeof FETCH_USER_DATA_SUCCESS;
  payload: {

   

  };
}

export interface SocialLoginUserAction {
  type: typeof SOCIAL_LOGIN_USER;
  payload: {
    network: 'facebook' | 'google';
    accessToken?: string;
  };
}

export interface ForgotPasswordAction {
  type: typeof FORGOT_PASSWORD;
  payload: {
    email: string;
  };
  formikActions: FormikHelpers<{}>;
}

export interface ForgotPasswordSuccessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface ForgotPasswordErrorAction {
  type: typeof FORGOT_PASSWORD_ERROR;
}

export interface ChangePasswordAction {
  type: typeof CHANGE_PASSWORD;
  payload: {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
  };
  formikActions: FormikHelpers<{}>;
}

export interface ChangePasswordSuccessAction {
  type: typeof CHANGE_PASSWORD_SUCCESS;
}

export interface ChangePasswordErrorAction {
  type: typeof CHANGE_PASSWORD_ERROR;
}

export interface ClearUserDataAction {
  type: typeof CLEAR_USER_DATA;
}

export interface UpdateUserInfoAction {
  type: typeof UPDATE_USER_INFO;
  payload: {
    username:string;
    phone:string;
    firstName: string;
    lastName: string;    
 
  };
  formikActions: FormikHelpers<{}>;
}

export interface UpdateUserInfoSuccessAction {
  type: typeof UPDATE_USER_INFO_SUCCESS;
}

export interface UpdateUserInfoErrorAction {
  type: typeof UPDATE_USER_INFO_ERROR;
}



export type UserActionTypes =
  | RegisterUserAction
  | RegisterUserSuccessAction
  | RegisterUserErrorAction
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserErrorAction
  | SocialLoginUserAction
  | ForgotPasswordAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordErrorAction
  | ChangePasswordAction
  | ChangePasswordSuccessAction
  | ChangePasswordErrorAction
  | FetchUserDataAction
  | FetchUserDataSuccessAction
  | ClearUserDataAction
  | UpdateUserInfoAction
  | UpdateUserInfoSuccessAction
  | UpdateUserInfoErrorAction;
  
