import React from 'react';
import { Link } from 'react-router-dom';

export const PublicNavbar = () => (
  <nav>
    <section>
      <span className="material-icons-round me-5" style={{ color: 'white' }}>
        groups
      </span>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
);

export const PrivateNavbar = () => (
  <nav>
    <section className="flex">
      <span className="material-icons-round me-5" style={{ color: 'white' }}>
        groups
      </span>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
      <Link to="/perfil">Perfil</Link>
    </section>
  </nav>
);
