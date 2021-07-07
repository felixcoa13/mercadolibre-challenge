import express from 'express';
import config from './config';

//Inicializa el servidor de Node JS.
function startServer() {
  const app = express();
  //Configura express e inicializa los endpoints
  require('./loaders').default({ expressApp: app });

  //Configura el puerto en el que correra el servidor
  app
    .listen(config.PORT, () => {
      console.log(`Server listening on port: ${config.PORT}`);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

startServer();

//Documentación: https://nodejs.org/es/docs/guides/getting-started-guide/
//Para la estructura y la arquitectura del proyecto NodeJS me base en:
//"Bulletproof Node.js architecture 🛡️": https://github.com/santiq/bulletproof-nodejs
