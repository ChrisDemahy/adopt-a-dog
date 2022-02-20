module.exports = [
  {
    name: 'rest-server',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'chris',
    database: 'adopt-a-dog',
    migrations: ['apps/rest-server/sql/*.ts'],
    entities: ['libs/entities/src/lib/*.ts'],
    cli: {
      migrationsDir: 'apps/rest-server/sql',
      entities: 'libs/entities/src/lib/*.entity.ts',
    },
  },
  {
    name: 'graphql-server',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'chris',
    database: 'adopt-a-dog',
    migrations: ['apps/graphql-server/sql/*.ts'],
    entities: ['libs/entities/src/lib/*.ts'],
    cli: {
      migrationsDir: 'apps/graphql-server/sql',
      entities: 'libs/entities/src/lib/*.entity.ts',
    },
  },
];
