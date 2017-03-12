var db = require("./../db/db");
var sha256 = require("sha256");

var Verifier = (collection) => {
  const self = {};
  self.collection = collection;
  self.verify = (query, givenPassword, session) => {
    return new Promise((resolve, reject) => {
      self.collection.findOne(query, (err, result) => {
        if(err){
          reject(err);
        }
        console.log(result);
        if(result.password === givenPassword){
          session.username = result.username;
          session.logged_in = true;
          resolve();
        }
        else{
          reject("wrong credentials")
        }
      });
    });
  };
  return self;
};

const verifier = Verifier(db.users);

module.exports = verifier;
