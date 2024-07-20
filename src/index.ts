import express, { Request, Response } from 'express';

import { startGreeting } from '@/utils';

const app: express.Express = express();
const port = 3000;

app.get('/', (request: Request, response: Response) => {
  startGreeting();
  response.send({ data: 'Hello world! 🍏' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
