const express = require('express');
const app = express();
const bookExpressRoute = express.Router();
let BookSchema = require('../model/books.model');


// Get books
bookExpressRoute.route('/').get((req, res) => {
    BookSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Create book
bookExpressRoute.route('/create').post((req, res, next) => {
    BookSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = bookExpressRoute;