const express = require('express');
const authors = require('./authors');
const books = require('./books');

const router = express.Router();

router.use('/authors', authors);
router.use('/books', books);

module.exports = router;
