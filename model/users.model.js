const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true }}
, {
    collection: 'users'
})

const User = mongoose.model('UserSchema', userSchema);

module.exports = User;
