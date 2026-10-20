const express = require('express');
const app = express();

//Handle Auth Middleware for GET, POST, PUT, DELETE requests
const {adminAuth, userAuth} = require('./middleware/auth');

app.use('/admin', adminAuth);
app.use('/user', userAuth);


app.get('/admin/getAllData', (req, res, next) => {
    res.send("Welcome to the admin route!");
    next();
});

app.post('/admin', (req, res) => {
    res.send("Admin POST request received!");
});


app.get('/user', (req, res, next) => {
    res.send("Welcome to the user route!");
    next();
});

app.post('/user', (req, res) => {
    res.send("User POST request received!");
});


app.listen(7777, () => {
    console.log("Server is running on port 7777");
});