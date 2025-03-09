import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { setupSwagger } from "./swaggerConfig.js"
import { PORT } from './utils/config.js';

import { Express } from 'express-serve-static-core';
import TasksRouter from './tasks/router.js';

const startServer = () => {
  const app = express();
  setupSwagger(app);

  configureMiddlewares(app);
  setupHealthcheck(app);

  app.use('/api/tasks/', TasksRouter);
  app.use(cors());

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

const configureMiddlewares = (app: Express) => {
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
      ],
      credentials: true,
      exposedHeaders: ['Authorization'],
    })
  );
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const setupHealthcheck = (app: Express) => {
  app.get('/health', (_req, res) => {
    res.status(200).send('Alive');
  });
};

export default startServer;
