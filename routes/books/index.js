const express = require('express');
const add = require('./add');
const edit = require('./edit');
const remove = require('./remove');
const search = require('./search');

const router = express.Router();

router.use('/add', add);
router.use('/edit', edit);
router.use('/remove', remove);
router.use('/search', search);

module.exports = router;
