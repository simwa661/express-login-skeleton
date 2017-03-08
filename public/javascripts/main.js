$(document).ready(function() {

  $(window).mousemove(function(event){
    if($(window).scrollTop() !== 0){
      if(event.pageY - $(window).scrollTop() < 100){
        $("#header").slideDown();
      }else{
        if($("#header").css("display") == "inline-block"){
          $("#header").slideUp();
        };
      };
    }else{
      $("#header").slideDown();
    };
  });
});
