$(window).scroll(function(){
  console.log($(window).scrollTop());
  if ($(window).scrollTop()<=0)
    $(".explore").addClass("at_top");
  else
    $(".explore").removeClass("at_top");
});