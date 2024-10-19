exports.getUser = (req, res) => {
  res.status(200).json({ message: 'User fetched successfully' });
};

exports.createUser = (req, res) => {
  res.status(201).json( { message: 'User created successfully' });
};
