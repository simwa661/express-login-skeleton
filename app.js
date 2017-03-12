var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");

var index = require('./routes/index');
var login = require('./routes/user/login');
var logout = require('./routes/user/logout');
var join = require("./routes/user/join");
var admin = require("./routes/admin/admin");
var remove_user = require("./routes/admin/remove_user");
var remove_post = require("./routes/admin/remove_post");
var loginModule = require("./javascripts/login_module");
var postModule = require("./routes/posting/post");
var app = express();
console.log(loginModule);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'ssshhhhh'}));



app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/join', join);
app.use('/admin', admin);
app.use('/remove_user', remove_user);
app.use('/remove_post', remove_post);
app.use('/post', postModule);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
