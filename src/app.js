const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the dashboard");
});

app.get("/test", (req, res) => {
    res.send("Hello from the test page");
});

app.get("/hello", (req, res) => {
    res.send("Hello from the Rahul page");
});


app.listen(7777, () => {
    console.log("Server is running on port 7777");
});