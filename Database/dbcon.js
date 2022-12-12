const mongoose = require("mongoose");


const ConnectToDB = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "eshop-database",
    }).then(() => {
        console.log("Database Connection is ready...");
    }).catch((err) => {
        console.log("err", err);
    });
}


module.exports = { ConnectToDB }