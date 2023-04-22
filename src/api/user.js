const express = require("express");
const router = express.Router();

const UserModel = require("../db/user.model");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findUserById(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(user);
});

module.exports = router;
