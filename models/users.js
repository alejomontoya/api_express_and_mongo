const {Schema, model } = require('mongoose');

const users = new Schema({
  name:  String,
  email: String,
  imageUrl:   String
});

module.exports = model('user', users)