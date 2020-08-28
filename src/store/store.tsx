import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as firebase from 'firebase';
import { firebaseConfig } from '../database/config';

import userDataReducer from './userData/reducer';

firebase.initializeApp(firebaseConfig);

interface ServicesTypes {
  firebase: typeof firebase;
  firestore: typeof firebase.firestore;
  auth: typeof firebase.auth;
}
export interface MiddlewaresTypes {
  services: ServicesTypes;
}

const store = createStore(
  userDataReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        services: {
          firebase,
        },
      }),
      logger
    )
  )
);
export default store;
