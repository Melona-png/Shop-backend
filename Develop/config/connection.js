
// requires the npm file with hidden passwords
require('dotenv').config();
// requiring sequelize
const Sequelize = require('sequelize');
// hooks up to database and plugs in keys
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });



module.exports = sequelize;