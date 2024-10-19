// Utility for input validation for server requests

const validate = (data) => {
  if (!data || data === '') {
    return 'Invalid input';
  } return 'Valid input';
};

module.exports = validate;
