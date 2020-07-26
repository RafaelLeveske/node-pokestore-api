require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    define: {
      timestamps: true,
    },
  },
  production: {
    username: 'DB_USERNAME',
    password: 'DB_PASSWORD',
    database: 'DB_DATABASE',
    host: 'DB_HOST',
    dialect: 'postgres',
    protocol: 'postgres',
    port: 'DB_PORT',
  },
};
