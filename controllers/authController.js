const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      //   const passwordPattern =
      //     /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

      const userExist = await User.findOne({ email: email });

      const hashedPassword = await bcrypt.hash(password, 10);

      if (userExist) {
        return res.status(400).json({ message: "User already exist" });
      }
      //   if (!passwordPattern.test(password)) {
      //     return res
      //       .status(422)
      //       .json({ message: "Password does not meet the required pattern." });
      //   }

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const userExist = await User.findOne({ email: email });

      if (!userExist) {
        res.status(404).json({ message: "user doesnot exist" });
      }

      const passwordIsValid = await bcrypt.compare(
        password,
        userExist.password
      );

      if (!passwordIsValid) {
        return res.status(400).json({ message: "Invaild Password" });
      }

      const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY);
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ message: "login sucessfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({ message: "Logout sucessfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  userdetails: async (req, res) => {
    try {
      const userId = req.userId;

      const user = await User.findById(userId).select(
        "-password -__v -createdAt -updatedAt -_id"
      );

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
