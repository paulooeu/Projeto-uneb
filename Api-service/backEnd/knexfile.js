// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    host: '192.168.99.100',
    port: '5432',
    database: 'service-usuario',
    user: 'postgres',
    password: 'docker',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
