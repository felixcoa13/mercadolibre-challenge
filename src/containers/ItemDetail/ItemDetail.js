import './ItemDetail.css';
import React from 'react';
import Breadcrumb from '../SearchResult/components/Breadcrumb/Breadcrumb'
import useApi from 'react-use-api'
import { getItemCurrency, getItemPriceFormated, getCondition } from '../../common/utils'

export default function ItemDetail(props) {
  const id = props.match.params.id;

  const [data] = useApi(`http://localhost:3000/api/items/${id}`)
  const [data2] = useApi(`http://localhost:3000/api/items?q=${encodeURI(data?.item?.title)}`)

  let item = data?.item;
  return <div className="item-detail-container">
      <Breadcrumb categories={data2?.categories} />
      <div className="card">
        <div className="wrapper">
          <div className="image-container">
            <img src={item?.picture} alt={item?.title} />
            <div className="description-container">
              <h2>Descripción del producto</h2>
              <p>{item?.description}</p>
          </div>
          </div>
          <div className="datails-container">
            <span className="condition">{getCondition(item)} - {item?.sold_quantity} Vendidos</span>
            <span className="title">{item?.title}</span>
            <span className="price-container">
              <span className="currency">{getItemCurrency(item)} </span>
              <span>{getItemPriceFormated(item)} </span>
            </span>
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>;
}