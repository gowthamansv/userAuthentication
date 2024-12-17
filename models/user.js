const mongoose = require("mongoose");

const userSchema = {
  name: String,
  email: String,
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
};

module.exports = mongoose.model("User", userSchema, "Users");
