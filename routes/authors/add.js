const add = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'add author',
  })
};

module.exports = add;
