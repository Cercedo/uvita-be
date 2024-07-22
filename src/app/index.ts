import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import ErrorMiddleware from './middlewares/errorMiddleware';
import NotFoundMiddleware from './middlewares/notFoundMiddleware';
import appRouter from './router';

////---- Initialization -------------------------------------------------------
export const app: express.Express = express();

////---- Middlewares ----------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static('public'));

////---- Routes ---------------------------------------------------------------
app.use('/api', appRouter);

////---- Error handling -------------------------------------------------------
app.use(NotFoundMiddleware.handle);
app.use(ErrorMiddleware.handle);
