const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/',(req,res,next)=>{
    res.status(200).send({msg : "Server it's running!"});
});

routes.get('/users',UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;
