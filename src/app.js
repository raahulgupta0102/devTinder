const express = require('express');
const app = express();

app.get("/getUserData", (req, res) => {
    // try {
        //DB logic to get user data

        throw new Error("This is a test error");
        res.send("User Data Send");

    // } catch (error) { 
    //     res.status(500).send("Something wrong while fetching user data"); 
    // }
});

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong");
    }
});

app.listen(7777, () => {
    console.log("Server is running on port 7777");
});