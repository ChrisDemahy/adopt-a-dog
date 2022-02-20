import express from 'express';
import loggerMiddleWare from './app/middleware/logger';

// The config for the server
import config from './app/config';
// The root router
import router from './app/routes';

// Import the database configuration
import createConnection from './app/config/databaseConnection';

const main = async () => {
  // Create the connection to the database for Type Orm
  await createConnection;

  // Create the express app
  const app = express();

  // Use a JSON Parser
  app.use(express.json());

  // If logging is turned on, configure the express app to use the logger
  if (config.logging) app.use(loggerMiddleWare);

  // send the status of the api at the root endpoint of the api
  app.get('/', (req, res) => {
    res.send('ok');
  });

  // Register the root router
  app.use('/', router);

  // Start the express server
  app.listen(config.port, () => {
    console.log(`Adopt-A-Dog 🐕 Rest API listening on port ${config.port}`);
  });
};

main();
