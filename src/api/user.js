const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const UserModel = require('../db/user.model');

const userDB = [];

router.get('/', function(req, res) {
  res.send(userDB);
})

router.post('/', async function(req, res) {
  const body = req.body;

  const newUserResponse = await UserModel.createUser(body);

  res.send("New user created: " + newUserResponse);
})