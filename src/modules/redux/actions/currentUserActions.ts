import { ThunkAction } from 'redux-thunk';
import { LOGOUT_CURRENT_USER, SET_CURRENT_USER, User } from '../../../models';
import { currentUserReducer } from '../reducers/currentUserReducer';
import { auth, firestore } from '../../firebase/firebaseProvider';

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

interface LogutCurrentUser {
  type: typeof LOGOUT_CURRENT_USER;
}

export type CurrentUserActions = SetCurrentUserAction | LogutCurrentUser;

export const setCurrentUser = (
  persist: boolean,
): ThunkAction<void, typeof currentUserReducer, null, CurrentUserActions> => {
  return async (dispatch) => {
    if (auth.currentUser?.uid) {
      firestore
        .collection('users')
        .doc(auth.currentUser?.uid)
        .get()
        .then((doc) => {
          if (persist) {
            window.sessionStorage.setItem(
              'user',
              (doc.data() as User).username,
            );
          }
          dispatch({
            type: SET_CURRENT_USER,
            payload: doc.data() as User,
          });
        });
    } else {
      dispatch({
        type: SET_CURRENT_USER,
        payload: {
          username: window.sessionStorage.getItem('user') as string,
        },
      });
    }
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};
