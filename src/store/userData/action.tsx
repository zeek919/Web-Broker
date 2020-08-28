import { UserDataActionTypes, ILoginUser } from './types';
import { ActionCreator } from 'redux';

export const loginUser: ActionCreator<ILoginUser> = (): ILoginUser => ({
  type: UserDataActionTypes.LOGIN_USER,
});
