// Middleware for error handling
const errorHendler = (err, req, res) => {
  res.status(err.status || 500);
  res.send({
    message: err.message || 'Something went wrong',
    stack: err.stack
  });
};

module.exports = errorHandler;
