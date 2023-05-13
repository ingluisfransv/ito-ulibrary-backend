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

bookExpressRoute.route('/checkout/:id').put((req, res, next) => {
  const bookId = req.params.id;
  if (!bookId) {
    return res.status(400).send('Invalid book ID');
  }
  BookSchema.findById(bookId, (error, book) => {
    if (error) {
      return next(error);
    }
    if (!book) {
      return res.status(404).send('Book not found');
    }
    if (book.copies < 1) {
      return res.status(400).send('No copies available');
    }
    BookSchema.findByIdAndUpdate(bookId, { $inc: { copies: -1 } }, { new: true }, (error, updatedBook) => {
      if (error) {
        return next(error);
      }
      if (!updatedBook) {
        return res.status(404).send('Book not found');
      }
      res.json(updatedBook);
    });
  });
});




module.exports = bookExpressRoute;