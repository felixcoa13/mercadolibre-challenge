import express from 'express';
import config from './config';

  function startServer() {
    const app = express();
    require('./loaders').default({ expressApp: app });

    app.listen(config.PORT, () => {
      console.log(`Server listening on port: ${config.PORT}`);
    }).on('error', err => {
      console.error(err);
      process.exit(1);
    });

  }
  
startServer();
  