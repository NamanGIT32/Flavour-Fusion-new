const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // Password is not required for Google OAuth users
      validate: {
        validator: function (value) {
          // Ensure password is required only for non-Google signups
          return this.isGoogleLogin || value; // Pass validation if Google login
        },
        message: "Password is required for regular signups.",
      },
    },
    picture: {
      type: String,
    },
    isGoogleLogin: {
        type: Boolean, // Add a flag to indicate Google login
        default: false
    }
  },
  { timestamps: true }
);

const model = mongoose.model("User", userSchema);
module.exports = model;
