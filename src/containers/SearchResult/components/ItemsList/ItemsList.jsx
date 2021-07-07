import React from 'react';
import FreeShippingIcon from '../../../../assets/img/ic_shipping.png';
import {
  getItemCurrency,
  getItemPriceFormated,
} from '../../../../common/utils';
import './ItemsList.css';

const PictureContainer = ({item}) => (
  <div className="picture-container">
    <a href={`/items/${item.id}`}>
      <img className="picture" src={item.picture} alt={item.title} />
    </a>
  </div>
);

// Componente encargado de renderizar el contenedor de la descripcion del item.
const DescriptionContainer = ({item}) => (
  <div className="description-container">
    <span className="price-container">
      <span className="currency">{getItemCurrency(item)} </span>
      <span>{getItemPriceFormated(item)} </span>
      {item.free_shipping && <img src={FreeShippingIcon} alt="Envío Gratis" />}
    </span>
    <a href={`/items/${item.id}`} className="title">
      <h2>{item.title}</h2>
    </a>
    <span className="address">{item.address}</span>
  </div>
);

// Componente encargado de renderizar la lista de items.
export const ItemsList = ({items}) => (
  <div className="card items-list-container">
    {items?.map((item) => (
      <div className="item-container" key={item.id}>
        <PictureContainer item={item} />
        <DescriptionContainer item={item} />
      </div>
    ))}
  </div>
);
