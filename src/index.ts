import startServer from './server.js';

(async () => {
  try {
    console.log('server starting...');
    startServer();
  } catch (e) {
    console.log(e);
  }
})();
