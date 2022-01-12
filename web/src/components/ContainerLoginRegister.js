import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import SignInGoogle from './SignInGoogle';

const ContainerLoginRegister = () => {
  const [bandera, setBandera] = useState(0);

  const handleClick = () => setBandera(!bandera);
  return (
    <div>
      {bandera ? <Login /> : <Register />}
      <p>
        {bandera ? 'No tienes cuenta?' : 'Tienes cuenta?'}{' '}
        <button className="btn btn-info" onClick={handleClick}>
          click aqui{' '}
        </button>
      </p>
      <SignInGoogle />
    </div>
  );
};

export default ContainerLoginRegister;
