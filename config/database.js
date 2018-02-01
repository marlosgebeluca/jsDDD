module.exports = {
  development: {
    username: 'sa',
    password: 'Seguros1129!',
    database: 'ddd_dev',
    host: '192.168.111.112',
    dialect: 'mssql',
    dialectOptions: {
      instanceName: 'sql2012'
    }
  },
  test: {
    username: 'sa',
    password: 'Seguros1129!',
    database: 'ddd_dev',
    host: '192.168.111.112',
    dialect: 'mssql',
    logging: null,
    dialectOptions: {
      instanceName: 'sql2012'
    }
  },
  production: process.env.DATABASE_URL
};
