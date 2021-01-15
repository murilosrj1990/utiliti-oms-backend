const express = require('express');
const routes = require('./router');
const app = express();
require('./config/database.js');
app.use(routes);

module.exports = app;