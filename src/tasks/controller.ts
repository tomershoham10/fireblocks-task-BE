import { Request, Response } from 'express';
import TasksRepository from './repository.js';
import CustomError from '../utils/CostumError.js';

export default class TasksController {

    static async addTask(req: Request, res: Response) {
        try {
            const { description } = req.body;

            if (!description) {
                throw new CustomError('Description is required', 'DESCRIPTION_REQUIRED', 400);
            }

            await TasksRepository.addTask(description);
            res.status(200);

        } catch (error: any) {
            console.error('Controller Error:', error.message);
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, code: error.code });
            }
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async completeTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            if (!taskId) {
                throw new CustomError('Task id is required', 'ID_REQUIRED', 400);
            }
             await TasksRepository.completeTask(taskId);
            res.status(200);
        } catch (error: any) {
            if (error instanceof CustomError) {
                console.error('Controller Error:', error.message);
                res.status(error.statusCode).json({
                    error: error.message,
                    code: error.code,
                });
            }
            console.error('Unexpected Error:', error);
            res.status(400).json({ error: error.message });
        }
    }


    static async getMany(_req: Request, res: Response) {
        try {
            const tasks = await TasksRepository.getAll();
            console.log(tasks);
            res.status(200).json({ tasks });
        } catch (error: any) {
            console.error('Controller Error:', error.message);
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message });
            }
            res.status(500).json({ error: error.message });
        }
    }


}
