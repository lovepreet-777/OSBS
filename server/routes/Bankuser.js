const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Bankuser, validate } = require("../models/Bankuser");
const express = require("express");
const app = express();

router.post("/Bankuser/create", async (req, res) => {
  try {
    let Bankuser = new Bankuser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      location: req.body.location,
      phone: req.body.phone,
    });
    await Bankuser.save();
    res.status(200).send({
      statusCode: 200,
      message: "Account created Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ "Internal Server Error": err });
  }
});

app.get("/Bankuser/Login", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const Bankuser = await Bankuser.findOne({ email: req.body.email });
    if (Bankuser)
      return res
        .status(409)
        .send({ message: "Bankuser with email id already exits." });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new Bankuser({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "New Bankuser Created Successfully." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
