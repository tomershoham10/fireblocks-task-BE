import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import dotenv from 'dotenv';
dotenv.config();

const address = process.env.CONTRACT_ADDRESS;
const rpcUrl = process.env.RPC_URL;
const privateKey = process.env.PRIVATE_KEY;
const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpcUrl);


export default class TasksRepository {
    static async addTask(description: string): Promise<string | null> {
        try {
            if (!address || !privateKey) return null;

            const wallet = new ethers.Wallet(privateKey, provider);
            const contract = new ethers.Contract(address, abi, wallet);

            if (!contract) {
                throw new Error('Contract is null');
            }

            const tx = await contract.addTask(description);

            const receipt = await tx.wait();

            console.log(`Task added! Transaction Hash: ${receipt.hash}`);
            return 'ok';
        } catch (error: any) {
            console.error('Repository Error:', error);
            throw new Error(`tasks repo - addTask: ${error.message}`);
        }
    }

    static async completeTask(taskId: string): Promise<boolean> {
        try {
            if (!address || !privateKey) return false;

            const wallet = new ethers.Wallet(privateKey, provider);
            const contract = new ethers.Contract(address, abi, wallet);

            if (!contract) {
                throw new Error('Contract is null');
            }

            const tx = await contract.completeTask(taskId);

            const receipt = await tx.wait();
            console.log(`Task completed! Transaction Hash: ${receipt.hash}`);
            return true;
        } catch (error: any) {
            console.error('Repository Error:', error.message);
            throw new Error(`tasks repo - completeTask: ${error}`);
        }
    }

    static async getAll(): Promise<any[] | null> {
        try {
            if (!address) return null;
            const contract = new ethers.Contract(address, abi, provider);
            if (!contract) return [];

            const tasks = await contract.getTasks();
            console.log('get all tasks:', tasks);

            const formattedTasks = tasks.map((task: any) => ({
                id: task.id.toString(),
                description: task.description,
                completed: task.completed
            }));
            return formattedTasks;
        } catch (error: any) {
            console.error('Repository Error:', error.message);
            throw new Error(`tasks repo - getAll: ${error}`);
        }
    }
}
