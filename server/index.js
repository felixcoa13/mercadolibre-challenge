import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from '../src/App';

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
  