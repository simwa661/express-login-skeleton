var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.username = null;
  req.session.logged_in = false;
  res.redirect("/");
});

module.exports = router;
