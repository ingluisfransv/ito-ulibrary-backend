const express = require('express');
const app = express();
const userExpressRoute = express.Router();
let UserSchema = require('../model/users.model');


// Get users
userExpressRoute.route('/').get((req, res) => {
    UserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Create User
userExpressRoute.route('/create').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = userExpressRoute;