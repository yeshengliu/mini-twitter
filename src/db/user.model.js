const mongoose = require('mongoose');
const UserSchema = require('./user.schema').UserSchema;
const UserModel = mongoose.model('UserModel', UserSchema);

function createUser(user) {
  return UserModel.create(user);
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username }).exec();
}

function findUserByEmail(email) {
  return UserModel.findOne({ email: email.toLowerCase() }).exec();
}

module.exports = {
  UserModel,
  createUser,
  findUserByUsername,
  findUserByEmail,
}