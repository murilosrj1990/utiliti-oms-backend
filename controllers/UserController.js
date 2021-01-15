const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const {Storage} = require('@google-cloud/storage');

module.exports = {
    async index(req,res){
        let limit=5;
        let offset=0;
        if(req.body.page) offset = req.body.page;
        if(req.body.limit) limit = req.body.limit;
        const users = await User.findAll({
            attributes: ['id','name','email','phone'],
            limit,
            offset,
        });
        res.json(users);
    },

    async store(req,res){
        try{
            const { name , email ,phone, password } = req.body;
            if(!name || !email || !phone || !password) return res.status(400).json({message: 'User information missing.'});
            const passwordEncrypted = bcrypt.hashSync(password,10);
            const user = await User.create({ name, email, phone , password: passwordEncrypted });
            user.password = undefined;
            return res.status(200).json(user);
        }catch(err){
            return res.status(500).json({message: 'Error processing request.'});
        }
        
    },
}