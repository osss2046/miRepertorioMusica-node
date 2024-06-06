const { Pool } = require('pg');

// Configuración de la conexión
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'repertorio',
  password: '123456',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
