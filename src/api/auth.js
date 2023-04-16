const express = require('express');
const router = express.Router();
const UserModel = require('../db/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * User login at login page
 */
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user;
    // Return 401 if username is not registered
    user = await UserModel.findUserByUsername(username);
    if (!user) {
      return res.status(401).send("Username is not registered");
    }
    // Return 401 if password is incorrect
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send("Password is incorrect");
    }

    // Send back to front end
    const payload = { userId: user._id };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
      }
      return res.status(200).json(token);
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
})

module.exports = router;