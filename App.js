const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv/config");

const DbConn = require('./Database/dbcon')

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));

// app.use(authJwt());

//Routes
app.use('/', require('./routes/routes'));

//Database
const connectToDb = () => {
    DbConn.ConnectToDB()   // this function is to establish the connection with db
}
connectToDb()

//Server
app.listen(process.env.PORT, () => {
    console.log(`server is running ${process.env.PORT}`);
});
