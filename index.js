const express = require('express');

const app = express();

app.get('/',(req,res,next)=>{
    res.status(200).send({msg : "Server it's running!"});
});

app.listen(process.env || 3000);