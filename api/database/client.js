const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
});

client.connect();

module.exports = client;
