var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var posts = require(appRoot + "/javascripts/posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.logged_in){
    posts.retrievePosts("simonwallin1@gmail.com", function(gottenPosts) {
      res.render('index', {logged_in: req.session.username, admin: req.session.admin, posts: gottenPosts.reverse() });
    });
  }else{
    res.render('index');
  };
});

module.exports = router;
