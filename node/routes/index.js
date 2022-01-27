const express = require('express');
const router = express.Router();

/* GET home page. 2 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Git!' });
});

module.exports = router;