$(document).ready(function(){
  $(".twitch").hide()
  $(".skillz").hide()
  $("#projects").hide()
  $(".about").click(function(){
    $("#projects").hide()
    $(".skillz").hide()
    $("#about-show").show(1000)
  })
  $(".skills").click(function(){
    $("#about-show").hide()
    $("#projects").hide()
    $(".skillz").show(1000)
  })
  $(".projects").click(function(){
    $(".skillz").hide()
    $("#about-show").hide()
    $("#projects").show(1000)
  })
  $(window).scroll(function(){
    $('#face h1').css('letter-spacing', $(this).scrollTop()/50+'px')
    $('#myFace').css('transform','rotate('+($(this).scrollTop()+33)+'deg)')
    $('.contact img').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
    $('#skills p').css('letter-spacing', (-15) + $(this).scrollTop()/35+'px')
    $('#face').css('background-position-y', $(this).scrollTop()/-4+'px')
  })
  $('#face').mousemove(function(evt){
    $('.navg8 div').css({
    "margin-left": evt.clientX/30+"px",
    "margin-right": evt.clientX/30+"px",
    "margin-top": evt.clientY/-30+"px",
    "margin-bottom": evt.clientY/30+"px"
    })
    $('#face').css({
      'background-position-y': evt.clientY/-50+"px",
      'background-position-x': evt.clientX/-50+"px",
      'letter-spacing': evt.clientX/evt.clientY+"px"
    })
  })
  $('.skillz img').hover(function(){
    $(this).animate({height: '2.5em'}, 'slow')
  }, function(){
    $(this).animate({height: '2em'},'slow')
  })
})
