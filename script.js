$(document).ready(function(){

  $(".twitch").hide()
  // $('#skills p').css('letter-spacing', '-15px')

  $(window).scroll(function(){
    $('#face h1').css('letter-spacing', $(this).scrollTop()/50+'px')
    $('#myFace').css('transform','rotate('+$(this).scrollTop()+'deg)')
    $('.contact img').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
    // var faceScroll = $('#face').scrollTop()
    $('#skills p').css('letter-spacing', (-15) + $(this).scrollTop()/35+'px')
    $('#face').css('background-position-y', $(this).scrollTop()/-4+'px')
    if($(window).scrollTop() >= $('#skills').offset().top){
      $('#skills p').css('letter-spacing', '0em')
    }
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
      'background-position-x': evt.clientX/-50+"px"
    })
  })
  $('.skillz img').hover(function(){
    $(this).animate({height: '10.5em'}, 'slow')
  }, function(){
    $(this).animate({height: '10em'},'slow')
  })
  // var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PHP','WordPress','PostgresSQL','AJAX','JSON','Github','HTML5','CSS3','CLI','MongoDB','Bootstrap', 'Jasmine', 'Rspec', 'Selenium']
  //     x=0;
  //       while(x < skillsBlob.length){
  //         $('#skills p').append(' * '+skillsBlob[x])
  //         x++
  //       }
})
