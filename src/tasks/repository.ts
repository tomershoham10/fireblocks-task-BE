export default class TasksRepository {

    static async addTask(description: any): Promise<any[]> {
        try {
            console.log('repo addTask', description);
            return [];
        } catch (error: any) {
            console.error('Repository Error:', error.message);
            throw new Error(`tasks repo - addTask: ${error}`);
        }
    }

    static async completeTask(taskId: string): Promise<any[]> {
        try {
            console.log('repo completeTask', taskId);
            return [];
        } catch (error: any) {
            console.error('Repository Error:', error.message);
            throw new Error(`tasks repo - completeTask: ${error}`);
        }
    }

    static async getAll(): Promise<any[]> {
        try {
            return [];
        } catch (error: any) {
            console.error('Repository Error:', error.message);
            throw new Error(`tasks repo - getAll: ${error}`);
        }
    }
}
