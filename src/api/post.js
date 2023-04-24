const express = require("express");
const router = express.Router();
const PostModel = require("../db/post.model");
const UserModel = require("../db/user.model");

// Get all posts
router.get("/", async function (req, res) {
  try {
    const posts = await PostModel.findAllPosts();
    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// Get post with id
router.get("/id/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const post = await PostModel.findPostById(id);
    res.status(200).send(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// Get post with userId
router.get("/:username", async function (req, res) {
  try {
    const { username } = req.params;
    const user = await UserModel.findUserByUsername(username);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const posts = await PostModel.findPostsByUserId(user._id);
    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// create post
router.post("/", async function (req, res) {
  const { user, text, picUrl } = req.body;
  post = new PostModel.PostModel({
    user,
    text,
    picUrl,
  });
  try {
    const newPostResponse = await PostModel.createPost(post);
    res.status(200).send("New post created: " + newPostResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// delete post
router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    await PostModel.deletePost(id);
    res.status(200).send("Post deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// update post text
router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { text } = req.body;
  try {
    await PostModel.updatePost(id, text);
    res.status(200).send("Post updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
