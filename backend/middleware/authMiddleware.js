const jwt = require('jsonwebtoken');

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
