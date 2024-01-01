const jwt = require('jsonwebtoken');
// this middleware works correctly oky nizar bhai I have fix the errors

function authenticateWithToken(req, res, next) {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      let token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "Access Denied, token missing" });
      }

      jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "You are not authorized" });
        }
        
        // Assuming roles are included in the token payload
        if (decoded && decoded.user && decoded.user.role) {
          req.userRole = decoded.user.role; // Set user role in request object
        }

        req.user = decoded.user; // Set user information in request object
        next();
      });
    } else {
      return res.status(401).json({ message: "Access Denied, token missing" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = authenticateWithToken;
