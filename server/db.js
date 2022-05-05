const mongoose = require("mongoose");
require("dotenv").config;

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://lovepreet222:nitkkr789@cluster0.wlh98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("successfully connected to database");
  } catch (error) {
    console.log(error);
    console.log("couldn't connect to database");
  }
};
