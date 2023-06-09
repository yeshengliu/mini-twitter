const Schema = require('mongoose').Schema;

exports.UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    description: {
      type: String,
    },
    timestamp: { type: Date, default: Date.now },
  },
  { collection: 'users' }
);
