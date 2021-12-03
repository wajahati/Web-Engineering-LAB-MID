$(document).ready(
    function(){
   $(".imageCS1").mouseover(
    function(){
      $(this).animate({opacity:1});
      "fast"
});

$(".imageCS1").mouseout(
    function(){
   $(this).animate({opacity:0.5});
   "fast"
});
$(".imageCS2").mouseover(
    function(){
      $(this).animate({opacity:1});
      "fast"
});

$(".imageCS2").mouseout(
    function(){
   $(this).animate({opacity:0.5});
   "fast"
});
$(".imageCS3").mouseover(
    function(){
   $(this).animate({width:"100%"});
   "fast"
});
$(".imageCS3").mouseout(
    function(){
   $(this).animate({width:"50%"});
   "fast"
});

});