import React from 'react';
import './Breadcrumb.css';

// Componente encargado de renderizar el Breadcrumb de las categorias de la busqueda.

export const Breadcrumb = ({ categories }) => (
  <div className="breadcrumb">
    {categories &&
      categories.map((category, i, arr) => (
        <span key={category}>
          {category} {arr.length - 1 !== i && ' > '}
        </span>
      ))}
  </div>
);
