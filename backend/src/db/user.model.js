const mongoose = require("mongoose");
const UserSchema = require("./user.schema").UserSchema;
const UserModel = mongoose.model("UserModel", UserSchema);

function createUser(user) {
  return UserModel.create(user);
}

function findAllUsers() {
  return UserModel.find().exec();
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username }).exec();
}

function findUserByEmail(email) {
  return UserModel.findOne({ email: email.toLowerCase() }).exec();
}

function findUserById(id) {
  return UserModel.findById(id).exec();
}

function updateUser(id, user) {
  return UserModel.findByIdAndUpdate(id, user, { new: true }).exec();
}

module.exports = {
  UserModel,
  createUser,
  findUserByUsername,
  findUserByEmail,
  findUserById,
  updateUser,
  findAllUsers,
};
