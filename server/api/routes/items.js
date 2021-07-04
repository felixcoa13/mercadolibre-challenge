import { Router } from 'express';
import { searchItems, getItem, getItemDescription  } from '../../services/mercadolibre';
const route = Router();

function getCategories(filters) {
    if(!filters)
        return [];
        console.log(filters);
    const filter = filters.find(f => f.id === "category");
    if(!filter || filter.values.length == 0)
        return [];
        console.log(filter);
    const value = filter.values[0];            
    if(!value)
        return [];
        console.log(value);
    const paths = value.path_from_root;
    if(!paths)
        return [];
        console.log(paths);
    return paths.map(path => path.name)
};

export default (app) => {
    app.use('/items', route);

    route.get('/', async (req, res) => {
        let q = req.query.q; 
        let response = await searchItems(q);
        let result = {
            author: {
                name: "Felix",
                lastname: "Coa"
            },
            categories: getCategories(response.filters),
            item: response.results.map(item => ({
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            }))
        };
        res.send(result);
    });
    route.get('/:id', async (req, res) => {
        let id = req.params.id;
        let item = await getItem(id);
        let itemDescription = await getItemDescription(id);
        let result = {
            author: {
                name: "Felix",
                lastname: "Coa"
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: itemDescription.text || itemDescription.plain_text
            }
        };
        res.send(result);
    });
};
    