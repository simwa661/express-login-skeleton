var express = require('express');
var router = express.Router();
var appRoot = require("app-root-path");
var db_init = require(appRoot + "/db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.admin){
    db_init.users.remove({"email": req.query.email});
    db_init.posts.remove({"_id": req.query.postId});
  }
  res.redirect("/admin");
});

module.exports = router;
