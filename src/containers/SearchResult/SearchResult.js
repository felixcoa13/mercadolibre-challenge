import './SearchResult.css';
import React from 'react';

import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ItemsList from './components/ItemsList/ItemsList'
import useApi from 'react-use-api'

export default function SearchResult(props) {
  function getQueryParam(paramName){
    const queryParams = props?.location?.search;
    if(!queryParams)
      return null;
    const query = new URLSearchParams(queryParams);
    return query.get(paramName);
  }
  const [data] = useApi(`http://localhost:3000/api/items?q=${getQueryParam('q')}`)
  return <div className="search-result-container">
      <Breadcrumb categories={data?.categories}></Breadcrumb>
      <ItemsList items={data?.items}></ItemsList>
    </div>;
}