import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../customHooks/useForm';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../actions/authActions';
import Swal from 'sweetalert2';

const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      Swal.fire('Error', 'Name is required', 'error');
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire('Error', 'Email is not valid', 'error');
      return false;
    } else if (password !== password2 || password.length < 5) {
      Swal.fire('Error', 'Password should be at least 6 characters and match each other', 'error');
      return false;
    }

    return true;
  };

  return (
    <>
      <h3 className="auth__title mt-3">Registrar</h3>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};

export default Register;
