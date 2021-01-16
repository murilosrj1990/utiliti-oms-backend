const express = require('express');
const routes = require('./router');
const app = express();
const cors = require('cors');
require('./config/database.js');

app.disable('x-powered-by');
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;