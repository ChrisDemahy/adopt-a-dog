import { createConnection, Connection } from 'typeorm';
import entities from '@adopt-a-dog/entities';

const connection = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'chris',
  // password: 'test',
  database: 'adopt-a-dog',
  entities,
  migrations: ['apps/rest-server/src/app/sql/*.ts'],
  cli: {
    migrationsDir: 'apps/rest-server/src/app/sql',
  },
});

export default connection;
