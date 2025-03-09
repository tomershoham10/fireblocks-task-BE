import TasksRepository from "./repository";

export default class TasksManager {

    static async addTask(description: string): Promise<any> {
        try {
            const newTask = await TasksRepository.addTask(description);
            return newTask;
        } catch (error: any) {
            console.error('Manager Error [addTask]:', error.message);
            throw new Error('Manager error in addTask');
        }
    }

    static async completeTask(taskId: string): Promise<boolean> {
        try {
            const tasks = await TasksRepository.completeTask(taskId);
            return tasks;
        } catch (error: any) {
            console.error('Manager Error [completeTask]:', error.message);
            throw new Error('Manaqger error in completeTask');
        }
    }


    static async getAll(): Promise<any[] | null> {
        try {
            const tasks = await TasksRepository.getAll();
            return tasks;
        } catch (error: any) {
            console.error('Manager Error [getAll]:', error.message);
            throw new Error('manager error in getAll');
        }
    }
}
