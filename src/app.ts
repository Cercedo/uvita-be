import express, { Request, Response } from 'express';

import { startGreeting } from '@/utils';

export const app: express.Express = express();

app.use(express.static('public'));

app.get('/', (request: Request, response: Response) => {
  startGreeting();
  response.send({ data: 'Hello world! 🍏' });
});
