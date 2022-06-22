const remove = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'remove book',
  })
};

module.exports = remove;
