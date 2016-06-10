$(document).ready(function(){
  $(".first").hover(function(){
    $(this).toggleClass("big");
  });
  $("p").hide();
  $(".london").click(function(){
    $("p").toggle();
  });
  $(".nyc").click(function(){
    $(this).toggleClass("flip");
    $(".text").text("New York is the best city");
  });
});
