import './Searchbar.css';
import React from 'react';
import SearchIcon from '../../../assets/img/ic_Search@2x.png.png';

// Componente encargado de renderizar la barra de busqueda.

export const Searchbar = () => (
  <form className="nav-search" action="/items" method="GET" role="search">
    <input
      type="text"
      className="nav-search-input"
      aria-label="Ingresá lo que quieras encontrar"
      name="q"
      placeholder="Nunca dejes de buscar"
      maxLength="120"
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck="false"
      autoComplete="off"
      tabIndex="0"
      required
    />
    <button type="submit" className="nav-search-btn" tabIndex="-1">
      <img aria-label="Buscar" className="nav-icon-search" src={SearchIcon} />
    </button>
  </form>
);
