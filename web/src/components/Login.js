import React from 'react';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../actions/authActions';
import { useForm } from '../customHooks/useForm';

const Login = () => {
  const [formValues, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456'
  });

  const dispatch = useDispatch();

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <>
      <h3 className="auth__title mt-3">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
