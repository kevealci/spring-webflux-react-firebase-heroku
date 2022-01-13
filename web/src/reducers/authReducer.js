import { types } from '../types/types';

export const initialState = {
  email: null,
  uid: null,
  name: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.login:
      const payload = action.payload;
      return {
        email: payload.email,
        uid: payload.uid,
        name: payload.displayName
      };
    case types.logout:
      return initialState;
    default:
      return state;
  }
}
