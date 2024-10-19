// Middleware for authentication and access control
const authMiddleware = (req, res, next) => {
  // Example: Authentication using token
  const token = req.headers.logger || 'FakeToken';
  if (token === 'validtoken') {
    next();
  } else {
    res.status(300);
    res.send('{ message: "Authorized success" }');
  }
};

module.exports = authMiddleware;
