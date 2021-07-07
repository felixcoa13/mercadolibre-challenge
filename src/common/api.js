import useApi from 'react-use-api';

const API_URL = 'http://localhost:3000/api/items';

// Realizando llamada a la API de busqueda de items.
export const useApiItems = (q) => {
  const [data] = useApi(`${API_URL}?q=${encodeURI(q)}`);
  return data || {};
};

// Realizando llamada a la API de busqueda del detalle de un item.
export const useApiItemDetail = (id) => {
  const [data] = useApi(`${API_URL}/${id}`);
  return data || {};
};
