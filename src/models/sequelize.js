const { Sequelize } = require('sequelize');

const DB_NAME1 = process.env.DB_NAME1;
const DB_USER1 = process.env.DB_USER1;
const DB_PASS1 = process.env.DB_PASS1;
const DB_HOST1 = process.env.DB_HOST1;
const DB_PORT1 = process.env.DB_PORT1;
// const DB_NAME2 = process.env.DB_NAME2;
// const DB_USER2 = process.env.DB_USER2;
// const DB_PASS2 = process.env.DB_PASS2;
// const DB_HOST2 = process.env.DB_HOST2;
// const DB_PORT2 = process.env.DB_PORT2;

const _sequelize = new Sequelize({
  dialect: 'postgres',
  database: DB_NAME1,
  username: DB_USER1,
  password: DB_PASS1,
  host: DB_HOST1,
  port: DB_PORT1,
  pool: {
    max: 9,
    min: 0,
    idle: 10000,
  },
});

// const _sequelize = new Sequelize({
//     dialect: 'postgres',
//     database: DB_NAME2,
//     username: DB_USER2,
//     password: DB_PASS2,
//     host: DB_HOST2,
//     port: DB_PORT2,
//     pool: {
//       max: 9,
//       min: 0,
//       idle: 10000,
//     },
//   });

/**
 * @returns {Object} sequelize
 */
module.exports.getSequelize = () =>
  _sequelize ? _sequelize : null;
