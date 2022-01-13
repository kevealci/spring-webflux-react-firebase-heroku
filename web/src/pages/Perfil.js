import React from 'react';
import { useSelector } from 'react-redux';
import ActualizarPerfil from '../components/ActualizarPerfil';

const Perfil = () => {
  const { name, email } = useSelector((state) => state.auth);

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
