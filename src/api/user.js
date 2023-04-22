const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const UserModel = require("../db/user.model");

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = await UserModel.findUserById(id);
//   res.status(200).json(user);
// });

module.exports = router;
