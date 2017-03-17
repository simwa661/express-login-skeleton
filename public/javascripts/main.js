$(document).ready(function() {
  if($(".post-section").length > 0){
    setInterval(function() {
      //$(".post-section").load("/post")
    }, 2000);
  };

  $(".comment-btn").click(function(){
    $(this).siblings(".post-comment-form").toggle();
  });

  $(".login-link").click(function() {
    $("#login-section").toggle();
  });
});
