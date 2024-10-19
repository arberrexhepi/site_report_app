// Utility for consistent api responses
quickResponse = (res, data,  status = 200) => {
  res.status(status);
  res.json(data);
};

module.exports = quickResponse;
