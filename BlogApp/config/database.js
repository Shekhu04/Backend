const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection successfull"))
    .catch((error) => {
        console.log(error.message);
        process.exit(1)
    });
}
module.exports = connectWithDb;