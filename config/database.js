const Sequelize = require('sequelize');
const bdConfig = require('./config.json');

const User = require('../models/User');

var connection
if (process.env.NODE_ENV==="prod") connection = new Sequelize(bdConfig.production);
if (process.env.NODE_ENV==="test") connection = new Sequelize(bdConfig.test);
if (!process.env.NODE_ENV) connection = new Sequelize(bdConfig.development);

User.init(connection);

module.exports = connection;