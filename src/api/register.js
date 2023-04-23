const express = require('express');
const router = express.Router();
const UserModel = require('../db/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const isEmail = require('validator/lib/isEmail');
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

/**
 * User submit at register page
 */
router.post('/', async (req, res) => {
  const { username, password, email, avatar } = req.body;

  // Return 401 if username is not valid
  if (username.length < 3 || !regexUserName.test(username)) {
    return res.status(401).send('Username is not valid');
  }

  // Return 401 if email is not valid
  if (!isEmail(email)) {
    return res.status(401).send('Email is not valid');
  }

  // Return 401 if password is not valid
  if (password.length < 6) {
    return res.status(401).send('Password must be at least 6 characters long');
  }

  try {
    let user;
    // Return 401 if user already exists
    user = await UserModel.findUserByUsername(username);
    if (user) {
      return res.status(401).send('Username is already taken');
    }
    user = await UserModel.findUserByEmail(email);
    if (user) {
      return res.status(401).send('This email is already registered');
    }

    // Create new user
    user = new UserModel.UserModel({
      username,
      password: bcrypt.hashSync(password, 10),
      email,
      avatar,
    });

    await UserModel.createUser(user);

    // Send back to front end
    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '2d' },
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal server error');
        }
        return res.status(200).json(token);
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
});

module.exports = router;
