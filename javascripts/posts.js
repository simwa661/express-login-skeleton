var appRoot = require('app-root-path');
var db_init = require(appRoot + "/db/db");



function createPost(user, content){
  var time = new Date();
  db_init.posts.insert({
    "user": user,
    "content": content,
    "time": time,
  });
};

function retrievePosts(user, callback){
  db_init.posts.find({}).then((res) => {
    callback(res);
  });
}

module.exports = {
  createPost: createPost,
  retrievePosts: retrievePosts,
}
