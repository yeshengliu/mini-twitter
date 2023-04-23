const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
    picUrl: { type: String },
    timestamp: { type: Date, default: Date.now },
  },
  { collection: "posts" }
);
