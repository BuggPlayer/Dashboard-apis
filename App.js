const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authJwt());

//Routes

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log("err",err);
  });

//Server
app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
