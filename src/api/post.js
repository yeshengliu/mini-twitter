const express = require("express");
const router = express.Router();
const PostModel = require("../db/post.model");

const postDB = [];

router.get("/", function (req, res) {
  res.send(postDB);
});

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

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  await PostModel.deletePost(id);
  res.send("Post deleted");
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { text } = req.body;
  await PostModel.updatePost(id, text);
  res.send("Post updated");
});

module.exports = router;
