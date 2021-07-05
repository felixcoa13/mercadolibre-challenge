import './Breadcrumb.css';
import React from 'react';
import { useSearchResultContext } from '../../../../contexts/SearchResultContext'

export default function Breadcrumb(props) {
  const searchResult = useSearchResultContext();
  const categories = searchResult?.categories;
  return <div className="breadcrumb">
    {categories && categories.map((category, i, arr) => 
    <>
      <span>{category}</span> {arr.length - 1 !== i && ' > '}
    </>)}
  </div>;
}