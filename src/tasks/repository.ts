import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import { ADRESS, PRIVATE_KEY, RPC_URL } from '../utils/config';
import CustomError from '../utils/CostumError';

const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(RPC_URL);


export default class TasksRepository {
    static async addTask(description: string): Promise<void> {
        try {

            const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
            const contract = new ethers.Contract(ADRESS, abi, wallet);

            const tx = await contract.addTask(description);

            const receipt = await tx.wait();
            console.log(`Task added! Transaction Hash: ${receipt.hash}`);
        } catch (error: any) {
            console.error('Repository Error:', error);
            throw new CustomError(
                `Failed to add task: ${error.message}`,
                'TASK_ADDITION_FAILED',
                500
            );
        }
    }

    static async completeTask(taskId: string): Promise<void> {
        try {
            const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
            const contract = new ethers.Contract(ADRESS, abi, wallet);

            const tx = await contract.completeTask(taskId);

            const receipt = await tx.wait();
            console.log(`Task completed! Transaction Hash: ${receipt.hash}`);
        } catch (error: any) {
            console.error('Repository Error:', error.message);

            if (error instanceof CustomError) {
                throw error;
            }

            throw new CustomError(`tasks repo - completeTask: ${error.message}`, 'TASK_COMPLETION_FAILED', 500);
        }
    }

    static async getAll(): Promise<Task[]> {
        try {
            const contract = new ethers.Contract(ADRESS, abi, provider);
            const tasks = await contract.getTasks();

            const formattedTasks = tasks.map((task: any) => ({
                id: Number(task.id),
                description: task.description,
                completed: task.completed
            }));
            return formattedTasks;
        } catch (error: any) {
            console.error('Repository Error:', error.message);

            if (error instanceof CustomError) {
                throw error; 
            }

            throw new CustomError(`tasks repo - getAll: ${error.message}`, 'FETCH_TASKS_FAILED', 500);
        }
    }
}
