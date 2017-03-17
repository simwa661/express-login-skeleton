var appRoot = require('app-root-path');
var db = require(appRoot + "/db/db");

createComment = (user, post, content) => {
  console.log("in create");
  var time = new Date().toUTCString();
  console.log(db.comments);
  db.comments.insert({"user": user, "post": post, "time": time, "content": content}, (err, result) => {

    console.log("in callback");
  });
};

retrieveComments = (postId, callback) => {
  db.comments.find({"_id": postId}).then((result) => {
    callback(result);
  });
}


module.exports = {
  createComment: createComment,
  retrieveComments: retrieveComments,
}
