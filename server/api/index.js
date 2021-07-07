import { Router } from 'express';
import items from './routes/items';

export default () => {
  const app = Router();
  items(app);

  return app;
};
