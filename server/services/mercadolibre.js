import { response } from 'express';

//En este archivo se encuentra toda la logica de conexion a la API de MercadLibre

const axios = require('axios');
//Funcion generica para realizar una petición GET utilizando "axios" como cliente http.
//https://github.com/axios/axios
async function get(url) {
  try {
    var result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error(error);
    if (error.response.status == 404) return { message: `item id not found` };
    return { message: 'error when try to connect to mercadolibre api.' };
  }
}

//Realiza una busqueda por texto y retorna maximo 4 items como resultados.
export const searchItems = async (query) => {
  return await get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`,
  );
};

//Realiza una busqueda por id y retorna el detalle del item.
export const getItem = async (id) => {
  return await get(`https://api.mercadolibre.com/items/${id}`);
};

//Realiza una busqueda por id y retorna la descripción del item con el id consultado.
export const getItemDescription = async (id) => {
  return await get(`https://api.mercadolibre.com/items/${id}/description`);
};
