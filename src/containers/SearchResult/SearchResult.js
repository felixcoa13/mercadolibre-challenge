import './SearchResult.css';
import React from 'react';

import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ItemsList from './components/ItemsList/ItemsList'
import useApi from 'react-use-api'

//Componente encargado de renderizar la pagina de resultados.

export default function SearchResult(props) {
  //Codigo encargado de obtener el parametro de la URL, ya sea invocado desde el cliente o desde el Servidor.
  function getQueryParam(paramName){
    const queryParams = props?.location?.search;
    if(!queryParams)
      return null;
    const query = new URLSearchParams(queryParams);
    return query.get(paramName);
  }
  //Realizando llamada a la API de busqueda de items.
  //Queria colocar esta logica fuera del componente, en un Context.
  //Pero el SSR lanzaba error y no permitia hacerlo. Por lo que no me quedo otra que dejarlo aca.
  //Codigo pendiente de refactorizar
  const [data] = useApi(`http://localhost:3000/api/items?q=${getQueryParam('q')}`)

  return <div className="search-result-container">
      <Breadcrumb categories={data?.categories}></Breadcrumb>
      <ItemsList items={data?.items}></ItemsList>
    </div>;
}