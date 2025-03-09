import dotenv from 'dotenv';
dotenv.config();


export const RPC_URL = process.env.RPC_URL ?? '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';
export const ADRESS = process.env.CONTRACT_ADDRESS ?? '';
export const PORT = process.env.PORT || 8080;
