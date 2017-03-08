var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var db_init = require(appRoot + "/db/db");
var sha256 = require("sha256");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.body.logged_in){
      res.render("join");
  }else{
      res.redirect("/");
  };
});


router.post('/', function(req, res) {
  var already_existing;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var password = req.body.password;
  var email = req.body.email;
  db_init.users.findOne({email:email}, function(e, result){
    if (e) {
      console.log("error: " + e);
    };
    console.log(result);
    if(result){
      already_existing = true;
    };
    if (!already_existing) {
      console.log("! already_existing");
      db_init.users.insert({
        email:email,
        firstname:firstname,
        lastname:lastname,
        password: sha256(password),
      }, function(){
        res.redirect("/");
      });
    };
  });
});

module.exports = router;
