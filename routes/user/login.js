var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var db_init = require(appRoot + "/db/db");
var sha256 = require("sha256");

/* GET home page. */
router.post('/', function(req, res) {
  console.log("in login");
  var email = req.body.email;
  var password = req.body.password;
  console.log();
  db_init.users.findOne({email:email},function(e, result){
    console.log("in callback");
    if (e){
      console.log("e");
      res.render("index", {message: "Inloggningen misslyckades"});
    }
    if(result.password == sha256(password)){
      console.log("correct password");
      req.session.user=email;
      req.session.logged_in = true;
      res.redirect("/");
    }else{
      console.log("not correct password");
      res.render("login", {message: "Inloggningen misslyckades"});
    }
  })
});

module.exports = router;
