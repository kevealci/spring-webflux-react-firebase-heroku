import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.email, user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.email, user.uid, user.displayName));
      })
      .catch((e) => Swal.fire('Error', e.message, 'error'));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.email, user.uid, user.displayName));
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const login = (email, uid, displayName, password) => ({
  type: types.login,
  payload: { email, uid, displayName }
});

export const logout = () => ({
  type: types.logout
});
