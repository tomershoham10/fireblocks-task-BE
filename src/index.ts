import startServer from './server.js';
import { ADRESS, PRIVATE_KEY, RPC_URL } from './utils/config.js';

(async () => {
  try {
    console.log('Validating environment variables...');
    // Check if all required environment variables are set
  if (!RPC_URL || !PRIVATE_KEY || !ADRESS) {
    throw new Error('Missing environment variables');
  }
    console.log('server starting...');
    startServer();
  } catch (e) {
    console.error(e);
  }
})();
