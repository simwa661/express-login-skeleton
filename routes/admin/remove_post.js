var express = require('express');
var router = express.Router();
var appRoot = require("app-root-path");
var db_init = require(appRoot + "/db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.admin){
    db_init.posts.remove({"_id": req.query.postId});
    res.redirect("/");
  }
  db_init.posts.findOne({"_id": req.query.postId}).then((result) => {
    console.log(result.user);
    console.log(req.session.username);
    console.log(result.user == req.session.username);
    if(result.user === req.session.username){
      console.log("in");
      db_init.posts.remove({"_id": req.query.postId});
      res.redirect("/");
    }else{
      res.send("error")
    }
  });
});

module.exports = router;
