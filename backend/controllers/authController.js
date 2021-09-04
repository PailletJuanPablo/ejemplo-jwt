const db = require('../models')
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const claveSecreta = '123456';

module.exports = {

    login: async (req, res) => {

        const user = await User.findOne({where: {email: req.body.email}});
        if(!user) {
            return res.send({error: true}, 401)
        }
        const passwordsMatched = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordsMatched) {
            return res.send({error: true}, 401)
        }
      
        const token = jwt.sign(user.toJSON(), claveSecreta);

        return res.json({ user, token });
    },

    register: async (req, res, next) => {


        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(
            { name: req.body.name, email: req.body.email, password: hashedPassword }
        )
        const token = jwt.sign(user.toJSON(), claveSecreta);

        return res.json({ user, token });
    },

    me: (req, res) => {
        return res.json(req.user);
    }

}