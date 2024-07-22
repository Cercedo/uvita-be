import express, { Request, Response } from 'express';

import { startGreeting } from '@/utils';

const appRouter = express.Router();

appRouter.get('/', (_req: Request, res: Response) => {
  startGreeting();
  res.send({ data: 'Hello world! 🍏' });
});

export default appRouter;
