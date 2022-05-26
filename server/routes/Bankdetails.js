const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Banktransaction, validate } = require("../models/Bankdetails");
const express = require("express");
const app = express();
const Joi = require("joi");
const { Bankuser } = require("../models/Bankuser");

const generateRandomtransactionid = () => {
  const randomNumbersTuple = [];

  for (let i = 1; i < 4; i++) {
    const num = Math.ceil(Math.random() * 1000000).toString();
    randomNumbersTuple.push(num);
  }

  return Number(randomNumbersTuple.join(""));
};

router.post("/transaction", async (req, res) => {
  try {
    const creditUserAccount = req.body.creditUserAccount;
    const debitUserAccount = req.body.debitUserAccount;
    const amount = req.body.amount;
    const remarks = req.body.remarks;
    const creditUser = await Bankuser.findOne({
      accountNumber: creditUserAccount,
    });
    const debitUser = await Bankuser.findOne({
      accountNumber: debitUserAccount,
    });

    if (creditUser && debitUser) {
      const diff = debitUser.balance - amount;
      if (diff >= 0) {
        console.log(0);
        const id = generateRandomtransactionid();
        const curr = new Date();
        const date =
          curr.getDate() +
          "/" +
          (curr.getMonth() + 1) +
          "/" +
          curr.getFullYear() +
          " " +
          curr.getHours() +
          ":" +
          curr.getMinutes() +
          ":" +
          curr.getSeconds();
        console.log(date);
        const newTransaction = await Banktransaction.create({
          debitFrom: debitUserAccount,
          creditTo: creditUserAccount,
          amount: amount,
          transactionId: id,
          remarks: remarks,
          date: date,
        });
        newTransaction.save((err, user) => {
          if (err) console.log(err);
        });

        debitUser.balance -= amount;
        debitUser.save();

        creditUser.balance += amount;
        creditUser.save();

        res.send({ status: "success" });
      } else {
        res.send({ status: "error", error: "Balance not sufficient" });
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ status: "error", error: "Some error occurred" });
  }
  //try {
  //   let banktransaction = new Banktransaction({
  //     //   firstName: req.body.firstName,
  //     //   lastName: req.body.lastName,
  //     //   email: req.body.email,
  //     //   password: req.body.password,
  //     //   location: req.body.location,
  //     //   phone: req.body.phone,
  //     // accountNumber....,
  //     // transactionId...
  //     //   balance: 1000,
  //   });
  //   var transactionId = generateRandomtransactionid();
  //   banktransaction.transactionId = transactionId;
  //   console.log(banktransaction);
  //   if (balance < transactioAmmount) {
  //     return res.status(401).send({ message: "Insufficient Balance" });
  //   } else {
  //   }
  //   // await bankuser.save();
  //   res.status(200).send({
  //     statusCode: 200,
  //     message: "Ammount Transacted Succesfully",
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send({ "Internal Server Error": err });
  // }
});

module.exports = router;
