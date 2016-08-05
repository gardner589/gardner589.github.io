$(document).ready(function(){

  $('#content').toggle()
  $('#face h1').hide();
  $('#face p').hide();
  $('#face h1').toggle(1050);
  $('#face p').toggle(1050);
  $('#about').click(function(){
    $('#content').toggle(1500)
  })
  // $('#face img').hover(function(){
  //   $(this).parent().find($('h1')).toggle(1500);
  //   $(this).parent().find($('p')).toggle(1500);
  // })
  // $('#face img').click(function(){
  //   $('#face h1').toggle(1000);
  //   $('#face p').toggle(1000);
  // })



   //this.css("text-shadow","3px 5px 10px gold");
    //$("nav").css("text-shadow","3px 5px 10px blue").toggle();



});
