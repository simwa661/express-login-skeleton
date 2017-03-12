var express = require('express');
var router = express.Router();
var sha256 = require("sha256");
var appRoot = require('app-root-path');
var loginModule = require(appRoot + "/javascripts/login_module")

/* GET home page. */
router.post('/', function(req, res, next) {
  var email = req.body.email.replace(/\s/g,'');
  var password = req.body.password.replace(/\s/g,'');
  test = loginModule.verify({ "email": email }, sha256(password), req.session);
  test.then(() => {
    if(email === "simonwallin1@gmail.com"){
      req.session.admin = true;
    };
    res.redirect("/admin");
  }).catch(() => {
    res.redirect("/");
  });
});

module.exports = router;
