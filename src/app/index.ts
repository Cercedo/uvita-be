import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';

import { startGreeting } from '@/utils';

import ErrorMiddleware from './middlewares/errorMiddleware';
import NotFoundMiddleware from './middlewares/notFoundMiddleware';

////---- Initialization -------------------------------------------------------
export const app: express.Express = express();

////---- Middlewares ----------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static('public'));

app.get('/', (_req: Request, res: Response) => {
  startGreeting();
  res.send({ data: 'Hello world! 🍏' });
});

////---- Error handling -------------------------------------------------------
app.use(NotFoundMiddleware.handle);
app.use(ErrorMiddleware.execute);
