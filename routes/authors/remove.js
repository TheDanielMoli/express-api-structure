const remove = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'remove author',
  })
};

module.exports = remove;
