const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const authConfig = require('../config/authConfig');
//const {Storage} = require('@google-cloud/storage');

module.exports = {
    async index(req, res) {
        let limit = 5;
        let offset = 0;
        if (req.params.page) offset = req.params.page;
        if (req.params.limit) limit = req.params.limit;
        let users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone']
        });
        if (users) return res.json(users);

        return res.status(404).json({
            message: "Users not found."
        })

    },

    async store(req, res) {
        console.log(req);
        try {
            
            const { name, email, phone, password } = req.body;
            if (!name || !email || !phone || !password) return res.status(400).json({ message: 'User information missing.' });
            
            
            const passwordEncrypted = bcrypt.hashSync(password, 10);
            const user = await User.create({ name, email, phone, password: passwordEncrypted });
            user.password = undefined;
            return res.status(200).json(user);
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Error processing request.' });
        }

    },
}