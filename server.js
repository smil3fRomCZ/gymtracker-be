const http = require('http');

const app = require('./src/app');
const { SERVER_PORT } = require('./src/utils/serverConfiguration');

const server = http.createServer(app);

const initServer = async () => {
  try {
    server.listen(SERVER_PORT, () => {
      console.log(`Server running on port ${SERVER_PORT}`);
    });
  } catch (error) {}
};

initServer();
