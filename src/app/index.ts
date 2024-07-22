import express, { Request, Response } from 'express';

import { startGreeting } from '@/utils';

import ErrorMiddleware from './middlewares/errorMiddleware';
import NotFoundMiddleware from './middlewares/notFoundMiddleware';

////---- Initialization -------------------------------------------------------
export const app: express.Express = express();

app.use(express.static('public'));

app.get('/', (_req: Request, res: Response) => {
  startGreeting();
  res.send({ data: 'Hello world! 🍏' });
});

////---- Error handling -------------------------------------------------------
app.use(NotFoundMiddleware.handle);
app.use(ErrorMiddleware.execute);
