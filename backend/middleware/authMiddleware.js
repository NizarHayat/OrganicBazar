const jwt = require('jsonwebtoken');

<<<<<<< HEAD
function authenticateWithToken(req, res, next) {
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Access Denied, token missing' });
      }

      jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'You are not authorized' });
=======
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
>>>>>>> f082497 (added comment message for partner)
        }

        if (decoded && decoded.role) {
          req.userRole = decoded.role; // Set user role in the request object
          next();
        } else {
          return res.status(403).json({ message: 'Invalid token payload - Role not found' });
        }
      });
    } else {
      return res.status(401).json({ message: 'Access Denied, token missing' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = authenticateWithToken;
