import express, { Request, Response } from 'express';

import { startGreeting } from '@/utils';

export const app: express.Express = express();

app.use(express.static('public'));

app.get('/', (_req: Request, res: Response) => {
  startGreeting();
  res.send({ data: 'Hello world! 🍏' });
});
