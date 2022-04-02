const { Schema, model } = require("mongoose");

const userSchema = Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = model("user", userSchema);

module.exports = {
  User,
};
