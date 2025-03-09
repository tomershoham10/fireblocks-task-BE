import { Router } from 'express';
import TasksController from './controller';

const TasksRouter = Router();

TasksRouter.get('/', TasksController.getMany);

TasksRouter
    .post('/:id/complete', TasksController.completeTask)
    .post('/', TasksController.addTask);

export default TasksRouter;
