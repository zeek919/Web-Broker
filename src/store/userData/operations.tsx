import { ActionType } from './types';
import { MiddlewaresTypes } from '../store';
import { loginUser, setUserCredential } from './action';
import { initialStateShape } from './reducer';
import { ThunkAction } from 'redux-thunk';

export const loginUserWithGoogle = (): ThunkAction<
  Promise<void>,
  initialStateShape,
  MiddlewaresTypes,
  ActionType
> => async (dispatch, getState, middleware) => {
  const { firebase } = middleware.services;
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);

    dispatch(loginUser(true));

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserCredential({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
          })
        );
      }
    });
  } catch (error) {
    if (error.code === 'cancelled-popup-request') {
      dispatch(loginUser(false));
      throw new Error(error);
    }
  }
};

export const loginUserWithFacebook = (): ThunkAction<
  Promise<void>,
  initialStateShape,
  MiddlewaresTypes,
  ActionType
> => async (dispatch, getState, middleware) => {
  const { firebase } = middleware.services;
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    await firebase.auth().signInWithPopup(provider);

    dispatch(loginUser(true));

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserCredential({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
          })
        );
      }
    });
  } catch (error) {
    if (error.code === 'cancelled-popup-request') {
      dispatch(loginUser(false));
      throw new Error(error);
    }
  }
};
