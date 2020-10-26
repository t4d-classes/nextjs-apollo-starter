// Uncomment the following line for no SSL
// import http from 'http';
// Uncomment the following for SSL
// SSL Start
import https from 'https';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
// SSL End

dotenv.config();

import { logger } from './logger';
import { app } from './app';
import { apollo } from './apollo';

logger.info(`current environment: ${process.env.NODE_ENV}`);

// Uncomment the following line for no SSL
// const server = http.createServer(app);

// Uncomment the following for SSL
// SSL Start
const server = https.createServer(
  {
    key: fs.readFileSync(path.resolve('./ssl/server.key')),
    cert: fs.readFileSync(path.resolve('./ssl/server.cert')),
  },
  app,
);
// SSL End

apollo.installSubscriptionHandlers(server);

server
  .listen(process.env.PORT)
  .on('listening', () => {
    logger.info(
      `web server listening on port https://localhost:${process.env.PORT}${apollo.graphqlPath}`,
    );
    logger.info(
      `web socket server listening on port ws://localhost:${process.env.PORT}${apollo.subscriptionsPath}`,
    );
  })
  .on('error', (err) => {
    console.log(err);
  });
