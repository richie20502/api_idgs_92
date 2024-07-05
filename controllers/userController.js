const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const {username, password, email} = req.body;
        let user = new User({ username, password, email});
        user = await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}