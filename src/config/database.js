const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://raahulgupta74_db_user:hqvN1U0DmEETxpgg@cluster0.bkbn7d2.mongodb.net/DevTinder");
};

module.exports = connectDB;

