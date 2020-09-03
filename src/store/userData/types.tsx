import { Action } from 'redux';

export interface UserCredential {
  name: string;
  email: string;
  photoUrl: string;
  emailVerified: string;
  uid: string;
}

export enum UserDataActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  SET_USER_CREDENTIAL = 'SET_USER_CREDENTIAL',
}
export interface ILoginUser extends Action {
  type: typeof UserDataActionTypes.LOGIN_USER;
  payload: boolean;
}

export interface ISetUserCredential extends Action {
  type: typeof UserDataActionTypes.SET_USER_CREDENTIAL;
  payload: UserCredential;
}

export type ActionType = ILoginUser | ISetUserCredential;
