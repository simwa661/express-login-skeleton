var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/bff');
var sha256 = require('sha256');

var now = new Date();
var users = db.collection("users");
var posts = db.collection("posts");

function init_db(){
  users.insert({username:"simonwallin", password:sha256("sw0049sw"), email:"simonwallin1@gmail.com", admin: true});
};
users.index( { "email": 1 }, { unique: true } );
init_db();

exports.users = users;
exports.posts = posts;
exports.db = db;
