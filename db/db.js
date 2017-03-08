var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/bff');
var sha256 = require('sha256');

var now = new Date();
var users = db.collection("users");

function init_db(){
  users.insert({username:"simon wallin", password:sha256("sw0049sw"), email:"simon.wallin@eyevinn.se", admin: true});
};

exports.users = users;
exports.db = db;
