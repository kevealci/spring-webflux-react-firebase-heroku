import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../customHooks/useForm';
import { firebase } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';

const ActualizarPerfil = () => {
  const { email } = useSelector((state) => state.auth);

  const history = useHistory();

  const [formValues, handleInputChange] = useForm({});

  const { nombre, correo, contraseña } = formValues;

  const handleUpdate = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, contraseña)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: nombre });
        await user.updateEmail(correo);
        history.push('/');
        history.push('/perfil');
      })
      .catch((e) => {
        Swal.fire('Error', e.message, 'error');
      });
  };

  return (
    <div className="card container mt-5">
      <h3 className="card-title">Actualizar</h3>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="auth__input"
          autoComplete="off"
          value={nombre || ''}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Correo"
          name="correo"
          className="auth__input"
          value={correo || ''}
          onChange={handleInputChange}
        />

        <h3 className="card-title">Ingresar contraseña para confirmar</h3>

        <input
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          className="auth__input"
          autoComplete="off"
          value={contraseña || ''}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary mb-5">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default ActualizarPerfil;
