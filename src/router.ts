import { Router, Request, Response } from 'express';
import TasksRouter from './tasks/router';

const router: Router = Router();

router.get('/health', (_req: Request, res: Response) => {
  console.log('health');
  res.status(200).send('Alive');
});

router.use('/api/tasks/', TasksRouter);


export default router;
