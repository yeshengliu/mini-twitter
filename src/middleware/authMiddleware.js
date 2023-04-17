/**
 * Middleware to check if the cookie token is valid
 */

const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized");
    }

    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.userId = userId;
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
};