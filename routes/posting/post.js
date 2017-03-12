var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var postModule = require(appRoot + "/javascripts/posts")


/* GET home page. */
router.post('/', function(req, res, next) {
  postModule.createPost(req.session.username, req.body.postcontent);
  res.redirect("/");
});

router.get('/', function(req, res, next) {
  postModule.retrievePosts("simonwallin1@gmail.com", function(gottenPosts) {
    res.render('includes/post', {logged_in: req.session.username, admin: req.session.admin, posts: gottenPosts.reverse() });
  });
});

module.exports = router;
