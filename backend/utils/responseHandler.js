// Utility to handle BSON responses
const responseHandler = (resp, data, message, status) => {
  resp.status(status || 200);
  resp.send({
    status: 'success',
    data: data,
    message: message || 'Operation successful.'
  });
};

module.exports = responseHandler;
