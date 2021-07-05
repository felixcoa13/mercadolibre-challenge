import express from 'express';
import routes from '../api';
import config from '../config';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../src/App';
import { StaticRouter } from 'react-router-dom';
import { ApiProvider, injectSSRHtml } from 'react-use-api'
import  axios from 'axios';

export default ({ app }) => {
  // Load API routes
  app.use(config.api.prefix, routes());
  
  app.use(express.static('./build'));
  
  // Load route for React Server Side Rendering
  app.get('*', async (req, res) => {
    const apiContext = {
      // configure your global options or SSR settings
      settings: {
        axios, // to set your custom axios instance
        isSSR: () => true, // we are 100% sure here is SSR mode
      },
    }
    const context = { requestQueryParams: req.query };
    const renderSSR = () =>
    ReactDOMServer.renderToString(
      <ApiProvider context={apiContext}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ApiProvider>
    )
    const html = await injectSSRHtml(apiContext, renderSSR)
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      );
    });
  });
  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
