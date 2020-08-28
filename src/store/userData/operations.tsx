import { ILoginUser } from './types';
import { MiddlewaresTypes } from '../store';
import { loginUser } from './action';
import { initialStateShape } from './reducer';
import { ThunkAction } from 'redux-thunk';

export const loginUserWithGoogle = (): ThunkAction<
  Promise<void>,
  initialStateShape,
  MiddlewaresTypes,
  ILoginUser
> => async (dispatch, getState, middleware) => {
  const { firebase } = middleware.services;
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);

    dispatch(loginUser());
  } catch (error) {
    if (error.code === 'cancelled-popup-request') {
      throw new Error(error);
    }
  }
};

export const loginUserWithFacebook = (): ThunkAction<
  Promise<void>,
  initialStateShape,
  MiddlewaresTypes,
  ILoginUser
> => async (dispatch, getState, middleware) => {
  const { firebase } = middleware.services;
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    dispatch(loginUser());
  } catch (error) {
    console.log(error);
  }
};
