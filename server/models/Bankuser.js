const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const BankuserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // dob: { type: Date, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  accountNumber: { type: String },
  balance: { type: Number },
  bankname: { type: String, required: true },
});
BankuserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
  return token;
};

const Bankuser = mongoose.model("Bankuser", BankuserSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    location: { type: String, required: true },
    phone: { type: String, required: true },
    balance: { type: Number, required: true },
    bankname: { type: String, required: true },
  });
  return schema.validate(data);
};

module.exports = { Bankuser, validate };
