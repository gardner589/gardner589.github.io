$(document).ready(function(){

  $(".twitch").hide()
  $('#skills p').css('letter-spacing', '-15px')
  // var skilletters = $('#skills p').css('letter-spacing')


  // $("#projects").slick({
  //     dots: true,
  //     speed: 500,
  //     infinite: true
  //   })
  $(window).scroll(function(){
    $('#face h1').css('letter-spacing', $(this).scrollTop()/50+'px')
    $('#myFace').css('transform','rotate('+$(this).scrollTop()+'deg)')
    $('.contact img').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
    // var faceScroll = $('#face').scrollTop()
    $('#skills p').css('letter-spacing', (-15) + $(this).scrollTop()/35+'px')
    $('#face').css('background-position-y', $(this).scrollTop()/-4+'px')
    if($(window).scrollTop() >= $('#skills').offset().top){
      $('#skills p').css('letter-spacing', '5px')
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
  var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PostgresSQL','AJAX','JSON','Git','Github','HTML5','CSS3','PHP','MongoDB','Bootstrap','Activerecord','mongoose ODM', 'Jasmine', 'Rspec', 'Selenium']
      x=0;
        while(x < skillsBlob.length){
          $('#skills p').append(' * '+skillsBlob[x])
          x++
        }
})
