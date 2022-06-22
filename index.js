const Express = require('express');
const formidable = require('express-formidable');
const routes = require('./routes');

const app = new Express();

app.use(formidable());

app.use('/api/v1', routes);

app.use((req, res) => {
  res.status(404).json({
    message: 'not found',
  });
});

app.listen(80, () => {
  console.log('listening on port 80');
});
