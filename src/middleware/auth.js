const adminAuth = (req, res, next) => {
    console.log("Admin route is being checked");
    const token = "xyz"; // Replace with your actual token validation logic
    if (token !== "xyz") {
        return res.status(401).send("Unauthorized: Invalid token");
    }
    next();
};


const userAuth = (req, res, next) => {
    console.log("User route is being checked");
    const token = "xyz"; // Replace with your actual token validation logic
    if (token !== "xyz") {
        return res.status(401).send("Unauthorized: Invalid token");
    }
    next();
}

module.exports = { adminAuth, userAuth };