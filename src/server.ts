
import express from 'express';
import { setupMiddlewares } from './helpers/config';
import homeRoute from './routes/pages';

const server = express();

setupMiddlewares(server, express);
server.use(homeRoute);

export default server;