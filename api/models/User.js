const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel', {
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        // geo: {
        //     type: {
        //         type: String,
        //         enum: ['Point'],
        //         required: true
        //     },
        //     coordinates: {
        //         type: [Number],
        //         required: true
        //     }
        // }
    },
    phone: String,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
})

module.exports = UserModel;