const faker = require('faker');
const UserModel = require('../models/User')

exports.generateData = async (req, res) => {
    switch (req.params.type) {
        case "user":

            user = faker.helpers.userCard()
            userModel = new UserModel(user);

            await userModel.save((err, user) => {
                if (err) return console.error(err)

                return user
            })

            return res.status(200).json({
                user
            });

        default:
            return res.status(406).json({
                message: `Type ${req.params.type} not supported`
            })
    }
}

exports.generatedData = async (req, res) => {
    switch (req.params.type) {
        case "user":

            user = await UserModel.findOne((err, user) => {
                if (err) next();

                return user;
            }).exec()

            console.log(user)

            return res.status(200).json({
                user
            });

        default:
            return res.status(406).json({
                message: `Type ${req.params.type} not supported`
            })
    }
}