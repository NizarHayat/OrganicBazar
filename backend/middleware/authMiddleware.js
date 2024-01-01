const jwt = require("jsonwebtoken");

// this is also works fine fix errors too,

const authenticateWithToken = (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            const token = req.headers.authorization.split(" ")[1];
            // console.log(token); 
            if (!token) {
                res.status(403).json("denied because you are not authenticated, token missing");
            }
            jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("you are not authorized");
                }
                req.user = user;
                next();
            });
        } else {
            res.status(403).json("you are not authorized, missing token or incorrect format");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = authenticateWithToken;


