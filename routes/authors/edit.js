const edit = (req, res) => {
  res.status(200).json({
    message: 'ok',
    route: 'edit author',
  })
};

module.exports = edit;
