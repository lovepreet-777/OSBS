require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const BankuserRoutes = require("./routes/Bankuser");

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/Bankuser/create", BankuserRoutes);
app.use("/api/Bankuser/Login", BankuserRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});
