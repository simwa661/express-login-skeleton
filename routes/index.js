var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.logged_in){
    res.render('index', { title: "BFF's", logged_in: true });
  }else{
    res.render('index', { title: "BFF's" });
  };
});

module.exports = router;
