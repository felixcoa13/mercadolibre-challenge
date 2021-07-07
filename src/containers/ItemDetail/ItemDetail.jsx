import React from 'react';
import { useParams } from 'react-router-dom';
import {
  getItemCurrency,
  getItemPriceFormated,
  getCondition,
  getItemPriceDecimals,
} from '../../common/utils';
import { Breadcrumb } from '../SearchResult/components/Breadcrumb/Breadcrumb';
import { useApiItems, useApiItemDetail } from '../../common/api';
import './ItemDetail.css';

// Componente encargado de renderizar la imagen del item.
const ImageContainer = ({item}) => (
  <div className="image-container">
    <img src={item?.picture} alt={item?.title} />
    <div className="description-container">
      <h2>Descripción del producto</h2>
      <p>{item?.description}</p>
    </div>
  </div>
);

// Componente encargado de renderizar el detalle del item.
const DetailsContainer = ({item}) => (
  <div className="details-container">
    <span className="condition">
      {getCondition(item)} - {item?.sold_quantity} Vendidos
    </span>
    <span className="title">{item?.title}</span>
    <span className="price-container">
      <span className="currency">{getItemCurrency(item)} </span>
      <span>{getItemPriceFormated(item)}</span>
      <span className="decimals">{getItemPriceDecimals(item)}</span>
    </span>
    <button type="button" className="buy-button">
      Comprar
    </button>
  </div>
);

// Componente encargado de renderizar la pagina de detalle del item seleccionado.
export const ItemDetail = () => {
  const { id } = useParams();
  const { item } = useApiItemDetail(id);
  const { categories } = useApiItems(item?.title);

  return (
    <div className="item-detail-container">
      <Breadcrumb categories={categories} />
      <div className="card">
        <div className="wrapper">
          <ImageContainer item={item} />
          <DetailsContainer item={item} />
        </div>
      </div>
    </div>
  );
};
