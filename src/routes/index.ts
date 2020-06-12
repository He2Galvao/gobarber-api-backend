import { Router } from 'express';
import stationsRouter from './stations.routes';

const routes = Router();

routes.use('/stations', stationsRouter);

export default routes;
