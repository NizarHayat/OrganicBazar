const jwt = require('jsonwebtoken');




function roleMiddleware(requiredRole) {
  return function(req, res, next) {
    try {
      console.log("Required Role:", requiredRole);
      console.log("User Role:", req.userRole);
      console.log("Decoded Token payload:",req.user);
      if (!req.userRole || req.userRole !== requiredRole) {
        console.log("insufficient permissions");
        return res.status(403).json({ message: "Insufficient permissions" });
      }
      // If the user has the required role, proceed to the next middleware/controller
      console.log("premission granted");
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}

module.exports = roleMiddleware;

