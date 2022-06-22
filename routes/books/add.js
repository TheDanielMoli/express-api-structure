const add = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'add book',
  })
};

module.exports = add;
