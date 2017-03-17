var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var commentsModule = require(appRoot + "/javascripts/comments")


/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("in comme");
  commentsModule.createComment(req.session.username, req.body.postId, req.body.commentContent);
  res.redirect("/");
});

router.get('/', function(req, res, next) {
  postModule.retrievePosts("simonwallin1@gmail.com", function(gottenPosts) {
    res.render('includes/post', {logged_in: req.session.username, admin: req.session.admin, posts: gottenPosts.reverse() });
  });
});

module.exports = router;
