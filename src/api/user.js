const express = require("express");
const router = express.Router();

const UserModel = require("../db/user.model");

router.get("/", async (req, res) => {
  const users = await UserModel.findAllUsers();
  res.status(200).send(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findUserById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  delete user.password;
  res.status(200).send(user);
});

router.get("/username/:username", async (req, res) => {
  const { username } = req.params;
  const user = await UserModel.findUserByUsername(username);
  if (!user) {
    return res.status(404).send("User not found");
  }
  delete user.password;
  res.status(200).send(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findUserById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  try {
    await UserModel.updateUser(id, req.body);
    res.status(200).send("User updated");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
