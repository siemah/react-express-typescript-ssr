import express from 'express';
import { setupMiddlewares } from './helpers/config';
import homeRoute from './routes/pages';
import sequelize from './config/db';

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const server = express();

setupMiddlewares(server, express);
server.use(homeRoute);

export default server;