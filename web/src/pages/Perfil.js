import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import ActualizarPerfil from '../components/ActualizarPerfil';

import { firebase } from '../firebase/firebaseConfig';

const Perfil = () => {
  const { name, email } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        //console.log(user);
        dispatch(login(user.email, user.uid, user.displayName));
      }
    });
  }, [name, email]);

  return (
    <>
      <div className="card container mt-5">
        <h1>Informacion de Perfil</h1>
        <h3 className="card-title">Nombre</h3>
        <p className="card-text"> {name} </p>
        <h3 className="card-title">Email</h3>
        <p className="card-text"> {email} </p>
      </div>

      <ActualizarPerfil />
    </>
  );
};

export default Perfil;
