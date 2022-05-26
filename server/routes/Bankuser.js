const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Bankuser, validate } = require("../models/Bankuser");
const express = require("express");
const app = express();
const Joi = require("joi");

const generateRandomAccNumber = () => {
  const randomNumbersTuple = [];

  for (let i = 0; i < 3; i++) {
    const num = Math.ceil(Math.random() * 1000000).toString();
    randomNumbersTuple.push(num);
  }

  return Number(randomNumbersTuple.join(""));
};

router.post("/create", async (req, res) => {
  try {
    // console.log("hsisi");
    let bankuser = new Bankuser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      phone: req.body.phone,
      balance: 1000,
      bankname: req.body.bankname,
    });
    var accountNumber = generateRandomAccNumber();
    bankuser.accountNumber = accountNumber;
    //console.log(bankuser);

    const bankusercheck = await Bankuser.findOne({
      email: req.body.email,
      bankname: req.body.bankname,
    });
    if (bankusercheck) {
      return res.status(401).send({ message: "Email already exists." });
    }
    await bankuser.save();
    console.log(bankuser);
    res.status(200).send({
      statusCode: 200,
      message: "Account created Succesfully",
      Account_Number: accountNumber,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ "Internal Server Error": err });
  }
});

router.post("/login", async (req, res) => {
  console.log("love");
  try {
    // const { error } = (req.body);
    // if (error) {
    //   return res.status(400).send({ message: error.details[0].message });
    // }

    const bankuser = await Bankuser.findOne({
      accountNumber: req.body.accountNumber,
    }); //account no.

    if (!bankuser) {
      return res
        .status(401)
        .send({ message: "Invalid Account Number or Password" });
    }

    const validPassword = req.body.password === bankuser.password;
    // const validPassword = await bcrypt.compare(
    //   req.body.password,
    //   user.password
    // );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }
    const token = bankuser.generateAuthToken();
    console.log(token);
    res.status(200).send({
      data: token,
      message: "logged in successfully",
      Bankuser: bankuser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
