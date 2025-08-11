const jwt = require('jsonwebtoken');

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];

  try {
    // Check for JWT_SECRET existence
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: 'JWT secret not configured on server' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Role-based access control middleware
const roleCheck = (requiredRole) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
  if (req.user.role !== requiredRole) return res.status(403).json({ message: 'Forbidden' });
  next();
};

module.exports = { authMiddleware, roleCheck };