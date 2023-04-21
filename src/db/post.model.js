const mongoose = require("mongoose");
const PostSchema = require("./post.schema").PostSchema;
const PostModel = mongoose.model("PostModel", PostSchema);

function createPost(post) {
  return PostModel.create(post);
}

function findPostById(id) {
  return PostModel.findById(id).exec();
}

function findPostsByUserId(userId) {
  return PostModel.find({ user: userId }).exec();
}

function updatePost(id, post) {
  return PostModel.updateOne({ _id: id }, { $set: { text: post } }).exec();
}

function deletePost(id) {
  return PostModel.deleteOne({ _id: id }).exec();
}

module.exports = {
  PostModel,
  createPost,
  findPostById,
  findPostsByUserId,
  deletePost,
  updatePost,
};
