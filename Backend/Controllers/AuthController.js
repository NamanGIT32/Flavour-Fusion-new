const model = require("../Models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { oauth2Client } = require("../Utils/googleConfig");
const axios = require("axios");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await model.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "user already exist" });
    }
    const userModel = new model({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "signup successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.findOne({ email });
    const errMsg = "Wrong email or password";
    if (!user) {
      return res.status(403).json({ message: errMsg, success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.status(200).json({
      message: "login successfully",
      success: true,
      jwtToken,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

//Google auth controller
const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    // Exchange the authorization code for tokens (access_token, id_token, etc.)
    const googleRes = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleRes.tokens); // Set the tokens to the client
    // Fetch user information from Google's API using the access token
    const userRes = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" +
        googleRes.tokens.access_token
    );
    const { email, name, picture } = userRes.data;
    let user = await model.findOne({ email });
    if (!user) {
      user = await model.create({
        name,
        email,
        picture,
        isGoogleLogin: true, // Mark this user as a Google OAuth user
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    return res
      .status(200)
      .json({ message: "login successfully", success: true, token, user });
  } catch (error) {
    console.log(
      "Error while getting tokens: ",
      error.response?.data || error.message
    );
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
  login,
  googleLogin,
};
