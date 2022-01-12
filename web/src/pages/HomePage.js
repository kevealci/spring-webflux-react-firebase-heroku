import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContainerLoginRegister from '../components/ContainerLoginRegister';
import { startLogout } from '../actions/authActions';

const HomePage = ({ children }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <section>
      <h1>Home</h1>
      <div>{children}</div>
      <p>welcome to the question and answer app.</p>
      <Link to="/questions" className="button">
        View Questions
      </Link>
      {uid ? (
        <button onClick={handleLogout} className="btn btn-primary ms-3">
          Logout
        </button>
      ) : (
        <ContainerLoginRegister />
      )}
    </section>
  );
};
export default HomePage;
