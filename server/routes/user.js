const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const express = require("express");
const app = express();

router.post("/create", async (req, res) => {
  try {
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    const userexist = await User.findOne({ email: req.body.email });
    if (userexist) {
      return res.status(401).send({ message: "Email id already exists" });

      alert(error.response.data.message);
    }
    await user.save();
    res.status(200).send({
      statusCode: 200,
      message: "Account created Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ "Internal Server Error": err });
  }
});

app.get("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with email id already exits." });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "New User Created Successfully." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
