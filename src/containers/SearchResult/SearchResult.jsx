import React from 'react';
import './SearchResult.css';
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
import { ItemsList } from './components/ItemsList/ItemsList';
import { useQueryParams } from '../../common/utils';
import { useApiItems } from '../../common/api';
// Componente encargado de renderizar la pagina de resultados.

export const SearchResult = () => {
  const { q } = useQueryParams();
  const { categories, items } = useApiItems(q);
  return (
    <div className="search-result-container">
      <Breadcrumb categories={categories} />
      <ItemsList items={items} />
    </div>
  );
};
