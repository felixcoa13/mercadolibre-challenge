import './SearchResult.css';
import React from 'react';
import { SearchResultProvider } from '../../contexts/SearchResultContext'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ItemsList from './components/ItemsList/ItemsList'

export default function SearchResult(props) {
  return <SearchResultProvider {...props}>
    <div className="search-result-container">
      <Breadcrumb {...props}></Breadcrumb>
      <ItemsList {...props}></ItemsList>
    </div>
  </SearchResultProvider>;
}