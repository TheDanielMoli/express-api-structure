const search = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'search books',
  })
};

module.exports = search;
