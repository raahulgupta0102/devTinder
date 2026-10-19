const express = require('express');
const app = express();

app.listen(7777, () => {
    // console.log("Server is running on port 7777");
});

app.get("/", (req, res) => {
    res.send("Hello from the dashboard");
});

app.get("/test", (req, res) => {
    res.send("Hello from the test page");
});

app.get("/user", (req,res) => {
    res.send({firstName: "Rahul", lastName: "Gupta"});
});

app.post("/user", (req,res) => {
    res.send({firstName: "Vishal", lastName: "Sachan"});
});

app.delete("/user", (req,res) => {
    res.send("User deleted successfully");
});
