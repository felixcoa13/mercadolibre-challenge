import './Header.css';
import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';

// Componente encargado de renderizar el nav de la aplicación.

export const Header = () => (
  <header className="nav-header">
    <div className="nav-bounds">
      <a href="/" tabIndex="0" className="nav-logo">
        {' '}
      </a>
      <Searchbar />
    </div>
  </header>
);
