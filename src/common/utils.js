import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const getItemCurrency = (item) =>
  item?.price?.currency === 'USD' ? 'U$S' : '$';

export const getItemPriceFormated = (item) => {
  const amount = item?.price?.amount;
  return amount?.toLocaleString('es-AR', {
    maximumFractionDigits: item.price.decimals,
  });
};
export const getItemPriceDecimals = (item) => {
  const amount = Math.abs(item?.price?.amount || 0);
  const decimals = amount - Math.floor(amount);
  return decimals.toFixed(2).toString().split('.')[1];
};

export const getCondition = (item) =>
  item?.condition === 'new' ? 'Nuevo' : 'Usado';

export const useQueryParams = () => {
  const location = useLocation();
  const urlSearchParams = useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search)),
    [location.search],
  );
  return urlSearchParams;
};
