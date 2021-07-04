import { response } from 'express'

const axios = require('axios')
async function get(url) {
    try {
        var result = await axios.get(url)
        return result.data;
    } catch (error) {
        console.error(error)
        if(error.response.status == 404)
            return { message: `item id not found` }
        return { message: "error when try to connect to mercadolibre api." }
    }
}

export const searchItems = async (query) => {
    return await get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
}

export const getItem = async (id) => {
    return await get(`https://api.mercadolibre.com/items/${id}`);
}

export const getItemDescription = async (id) => {
    return await get(`https://api.mercadolibre.com/items/${id}/description`);
}