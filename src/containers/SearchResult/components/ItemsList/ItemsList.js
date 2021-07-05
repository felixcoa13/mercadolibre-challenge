import './ItemsList.css';
import React from 'react';
import { useSearchResultContext } from '../../../../contexts/SearchResultContext'
import FreeShippingIcon from '../../../../assets/img/ic_shipping.png'

export default function ItemsList(props) {
    const searchResult = useSearchResultContext();
    const items = searchResult?.items;
    console.log(items);
    function getItemCurrency(item){
        if(item?.price?.currency == "USD")
            return 'U$S';
        return '$'; 

    }
    function getItemPriceFormated(item){
        let amount = item?.price?.amount;
        return amount?.toLocaleString('es-AR', {maximumFractionDigits: item.price.decimals});
    }
    return <div className="card items-list-container">
        {items && items.map((item, i, arr) =>
        <div className="item-container">
            <div className="picture-container">
                <a href={`/items/${item.id}`}>
                    <img class="picture" src={item.picture} alt="item image"/>
                </a>
            </div>
            <div className="description-container">
                <span className="price-container">
                    <span class="currency">{getItemCurrency(item)} </span>
                    <span>{getItemPriceFormated(item)} </span>
                    {item.free_shipping && <img src={FreeShippingIcon}/>}
                </span>
                <a href={`/items/${item.id}`} className="title">
                    <h2>{item.title}</h2>
                </a>
                <span class="address">{item.address}</span>
            </div>
        </div>)
        }
    </div>;
}