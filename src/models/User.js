const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  age: Number,
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
