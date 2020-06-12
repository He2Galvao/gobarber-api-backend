import { Router } from 'express';

const stationsRouter = Router();

// LIST
stationsRouter.get('/helio', (request, response) => {
  const { body } = request;
  return response.json(body);
});

export default stationsRouter;
