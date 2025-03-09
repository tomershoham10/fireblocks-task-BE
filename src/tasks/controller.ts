import { Request, Response } from 'express';
import TasksManager from './manager.js';

export default class TasksController {

    static async completeTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;

            const updatedTask = await TasksManager.completeTask(taskId);
            if (!updatedTask) {
                throw new Error('Tasks controller complete error.');
            }
            res
                .status(201)
                .json({ message: 'Task completed successfully' });
        } catch (error: any) {
            console.error('Controller Error:', error.message);
            res.status(400).json({ error: error.message });
        }
    }

    static async addTask(req: Request, res: Response): Promise<any> {
        try {
            const { description } = req.body;

            const transactionHash = await TasksManager.addTask(description);

            if (transactionHash) {
                return res
                    .status(201)
                    .json({ message: 'Task created successfully', transactionHash });
            } else {
                throw new Error('Tasks controller create error.');
            }
        } catch (error: any) {
            console.error('Controller Error:', error.message);
            return res.status(500).json({ error: error.message });
        }
    }


    static async getMany(_req: Request, res: Response) {
        try {
            const tasks = await TasksManager.getAll();
            console.log(tasks);
            res.status(200).json({ tasks });
        } catch (error: any) {
            console.error('Controller Error:', error.message);
            res.status(500).json({ error: error.message });
        }
    }


}
