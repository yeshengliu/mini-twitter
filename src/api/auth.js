const express = require('express');
const router = express.Router();
const UserModel = require('../db/user.model');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * Retrieve user information from database given the 
 * decrypted token
 * This is called when the user access the index page and
 * decide whether to give access to the user or redirect to
 * login page
 */
router.get('/', authMiddleware, async (req, res) => {
  // userId is decrypted in the middleware
  const { userId } = req;

  try {
    const user = await UserModel.findUserById(userId);
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;