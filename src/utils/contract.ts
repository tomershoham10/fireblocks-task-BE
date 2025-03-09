import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import dotenv from 'dotenv';
dotenv.config();

const address = process.env.CONTRACT_ADDRESS;
const rpcUrl = process.env.RPC_URL;

async function initializeContract() {
    try {
        const provider = new ethers.JsonRpcProvider(rpcUrl);

        if (!address) return null;
        const contract = new ethers.Contract(address, abi, provider);
        return contract;
    } catch (error) {
        console.error('Failed to initialize contract:', error);
        return null;
    }
}

const contractPromise = initializeContract();

export default contractPromise;
