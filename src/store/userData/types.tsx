import { Action } from 'redux';

export enum UserDataActionTypes {
  LOGIN_USER = 'LOGIN_USER',
}
export interface ILoginUser extends Action {
  type: typeof UserDataActionTypes.LOGIN_USER;
}

export type ActionType = ILoginUser;
