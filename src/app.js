const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Shantanu",
        lastName: "Bajpai",
        email: "shantanu@gmail.com",
        password: "shantanu@123",
        age: 25
    }

    //creating a new user instance and saving it to the database
    const user = new User(userObj);
    try {
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
})



connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to database", err);
  });
