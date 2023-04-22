const express = require("express");
const router = express.Router();
const PostModel = require("../db/post.model");

// Get all posts
router.get("/", async function (req, res) {
  const posts = await PostModel.findAllPosts();
  res.send(posts);
});
// Get post with userId
router.get("/:userId", async function (req, res) {
  const { userId } = req.params;
  const posts = await PostModel.findPostsByUserId(userId);
  res.send(posts);
});

// create post
router.post("/", async function (req, res) {
  const { user, text, picUrl } = req.body;
  post = new PostModel.PostModel({
    user,
    text,
    picUrl,
  });
  const newPostResponse = await PostModel.createPost(post);
  res.send("New post created: " + newPostResponse);
});

// delete post
router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  await PostModel.deletePost(id);
  res.send("Post deleted");
});

// update post text
router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { text } = req.body;
  await PostModel.updatePost(id, text);
  res.send("Post updated");
});

module.exports = router;
