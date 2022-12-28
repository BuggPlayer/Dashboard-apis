const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv/config");
var cookieParser = require('cookie-parser');

const DbConn = require('./Database/dbcon')
// for more data
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());
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
