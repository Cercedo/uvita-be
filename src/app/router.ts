import express, { Request, Response } from 'express';

import patientRouter from '@/features/patient/presentation/patientRouter';
import { startGreeting } from '@/utils';

////---- Initialization -------------------------------------------------------
const appRouter = express.Router();

////---- Routes ---------------------------------------------------------------
appRouter.get('/', (_req: Request, res: Response) => {
  startGreeting();
  res.send({ data: 'Hello world! 🍏' });
});
appRouter.use('/patients', patientRouter);

export default appRouter;
