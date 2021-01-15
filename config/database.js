const Sequelize = require('sequelize');
const bdConfig = require('./config.json');
var connection
if (process.env.NODE_ENV==="prod") connection = new Sequelize(bdConfig.production);
if (process.env.NODE_ENV==="test") connection = new Sequelize(bdConfig.test);
if (!process.env.NODE_ENV) connection = new Sequelize(bdConfig.development);

module.exports = connection;