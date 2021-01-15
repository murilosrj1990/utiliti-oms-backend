const express = require('express');

const routes = express.Router();

routes.get('/',(req,res,next)=>{
    res.status(200).send({msg : "Server it's running!"});
});

module.exports = routes;
