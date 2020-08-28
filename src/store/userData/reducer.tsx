import { UserDataActionTypes, ActionType } from './types';
import { Reducer } from 'redux';

export interface initialStateShape {
  logged: boolean;
}

const initialState: initialStateShape = {
  logged: false,
};

const userDataReducer: Reducer<initialStateShape, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserDataActionTypes.LOGIN_USER: {
      let temporaryLogged = !state.logged;
      return {
        ...state,
        logged: temporaryLogged,
      };
    }
    default:
      return state;
  }
};

export default userDataReducer;
