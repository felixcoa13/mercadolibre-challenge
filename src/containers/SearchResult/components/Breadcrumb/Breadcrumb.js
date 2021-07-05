import './Breadcrumb.css';
import React from 'react';

//Componente encargado de renderizar el Breadcrumb de las categorias de la busqueda.

export default function Breadcrumb(props) {
  const categories = props?.categories;
  return <div className="breadcrumb">
    {categories && categories.map((category, i, arr) => 
      <span key={category}>{category} {arr.length - 1 !== i && ' > '}</span>
    )}
  </div>;
}