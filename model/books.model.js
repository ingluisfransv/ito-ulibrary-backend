const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  published_year: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  copies: {
    type: Number,
    required: true
  }
}, {
    collection: 'books'
})
const Book = mongoose.model('BookSchema', bookSchema);

module.exports = Book;
