const express = require('express');
const app = express();


app.get("/user", (req, res, next) => {
    console.log("Request1 received!");
    next();
},
(req, res, next) => {
    console.log("Request2 received!"); 
    next();
    // res.send("Response 2!");
},
(req, res) => {
    console.log("Request3 received!"); 
    res.send("Response 3!");
}
);



app.listen(7777, () => {
    console.log("Server is running on port 7777");
});