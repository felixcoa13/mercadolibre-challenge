import './ItemsList.css';
import React from 'react';
import FreeShippingIcon from '../../../../assets/img/ic_shipping.png'
import { getItemCurrency, getItemPriceFormated } from '../../../../common/utils'

//Componente encargado de renderizar la lista de items.

export default function ItemsList(props) {
    const items = props?.items;
    
    return <div className="card items-list-container">
        {items && items.map((item, i, arr) =>
        <div className="item-container" key={item.id}>
            <div className="picture-container">
                <a href={`/items/${item.id}`}>
                    <img className="picture" src={item.picture} alt={item.title}/>
                </a>
            </div>
            <div className="description-container">
                <span className="price-container">
                    <span className="currency">{getItemCurrency(item)} </span>
                    <span>{getItemPriceFormated(item)} </span>
                    {item.free_shipping && <img src={FreeShippingIcon} alt="Envío Gratis"/>}
                </span>
                <a href={`/items/${item.id}`} className="title">
                    <h2>{item.title}</h2>
                </a>
                <span className="address">{item.address}</span>
            </div>
        </div>)
        }
    </div>;
}