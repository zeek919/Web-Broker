import {
  UserDataActionTypes,
  ILoginUser,
  ISetUserCredential,
  UserCredential,
} from './types';
import { ActionCreator } from 'redux';

export const loginUser: ActionCreator<ILoginUser> = (
  isLogged: boolean
): ILoginUser => ({
  type: UserDataActionTypes.LOGIN_USER,
  payload: isLogged,
});

export const setUserCredential: ActionCreator<ISetUserCredential> = (
  userCredential: UserCredential
) => ({
  type: UserDataActionTypes.SET_USER_CREDENTIAL,
  payload: userCredential,
});
