var express = require('express');
var router = express.Router();
var appRoot = require("app-root-path");
var db_init = require(appRoot + "/db/db");


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.admin){
    var users;
    var posts;
    db_init.users.find({}, function(err, result) {
      users = result;
      db_init.posts.find({}, function(err, result2) {
        posts = result2;
        res.render('admin', { session: req.session, logged_in: true, users: users, posts: posts.reverse() });
      });
    });

  }else{
    res.redirect('/');
  };
});

module.exports = router;
