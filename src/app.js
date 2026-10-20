const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Hello from the dashboard");
});

app.get("/user", (req, res) => {
    res.send("Hello from the test page");
});

app.get(/^\/a(bc)?d$/, (req, res) => {
    res.send({ firstName: "Rahul", lastName: "Gupta" });
});

app.get("/user/:name/:password", (req,res) => {
    console.log(req.params);
    res.send({firstName: "Vishal", lastName: "Sachan"});
});

// app.delete("/user", (req,res) => {
//     res.send("User deleted successfully");
// });

app.listen(7777, () => {
    console.log("Server is running on port 7777");
});