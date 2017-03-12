$(document).ready(function() {
  if($(".post-section").length > 0){
    setInterval(function() {
      $(".post-section").load("/post")
    }, 2000);
  };

  $(".login-link").click(function() {
    $("#login-section").toggle();
  });
});
