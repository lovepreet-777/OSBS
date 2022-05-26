const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { Bankuser } = require("./Bankuser");
const { required, string } = require("joi");

const BanktransactionSchema = new mongoose.Schema({
  debitFrom: {
    type: String,

    required: true,
  },
  creditTo: {
    type: String,

    required: true,
  },

  amount: { type: Number, required: true },
  transactionId: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});
BanktransactionSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
  return token;
};

const Banktransaction = mongoose.model(
  "Banktransaction",
  BanktransactionSchema
);

const validate = (data) => {
  const schema = Joi.object({
    debitFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Bankuser,
      required: true,
    },
    CreditTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Bankuser,
      required: true,
    },

    amount: { type: Number, required: true },
    transactionId: {
      type: Number,
      required: true,
    },
    balance: { type: Number, required: true },
    date: {
      type: String,
      required: true,
    },
  });
  return schema.validate(data);
};

module.exports = { Banktransaction, validate };
