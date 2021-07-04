import { Router } from 'express';

const route = Router();

export default (app) => {
    app.use('/items', route);

    route.get('/', (req, res) => {
        var q = req.query.q; 
        res.send(q);
    })
    route.get('/:id', (req, res) => {
        let id = req.params.id;
        res.send(id);
    })
};
    
