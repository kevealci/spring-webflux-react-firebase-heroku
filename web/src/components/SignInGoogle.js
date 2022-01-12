import React from 'react';
import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../actions/authActions';

const SignInGoogle = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-secondary mb-2 mt-2">
      <b>Sign in with google</b>
    </button>
  );
};

export default SignInGoogle;
