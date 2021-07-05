import './Searchbar.css';
import React from 'react';
import SearchIcon from '../../../assets/img/ic_Search@2x.png.png'

//Componente encargado de renderizar la barra de busqueda.

export default function Searchbar() {
  return <form className="nav-search" action="/items" method="GET" role="search">
            <input type="text" className="nav-search-input" 
                aria-label="Ingresá lo que quieras encontrar" 
                name="q" 
                placeholder="Nunca dejes de buscar" 
                maxLength="120" 
                autoCapitalize="off" 
                autoCorrect="off" 
                spellCheck="false" 
                autoComplete="off" 
                tabIndex="2"
                required={true} />
            <button type="submit" className="nav-search-btn" tabIndex="3">
                <img aria-label="Buscar" className="nav-icon-search" src={SearchIcon}></img>
            </button>
        </form>;
}