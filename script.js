$(document).ready(function(){

  $("#projects").slick({
      dots: true,
      speed: 500,
      infinite: true
    })
  $(window).scroll(function(){
    $('#face').css('letter-spacing', $(this).scrollTop()/40+'px')
    $('#myFace').css('transform','rotate('+$(this).scrollTop()+'deg)')
    $('.contact').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
  })
  $('#face').mousemove(function(evt){
    $('.navg8 div').css({
    "margin-left": evt.clientX/30+"px",
    "margin-right": evt.clientX/30+"px",
    "margin-top": evt.clientY/-30+"px",
    "margin-bottom": evt.clientY/30+"px"
    })
    $('.contact img').css({
      width: evt.clientY/27+'%',
      "margin-bottom": evt.clientY/27+'%',
      "margin-left": evt.clientY/17+'%',
      "margin-right": evt.clientY/17+'%'
    })
  })
  var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PostgresSQL','AJAX','JSON','Git','Github','HTML5','CSS3','MongoDB','Bootstrap','Activerecord','mongoose ODM', 'Jasmine', 'Rspec', 'Selenium']
    x=0;
    addr = setInterval(function(){
        $('#skills p').append(' * '+skillsBlob[x])
        x++
        if(x == skillsBlob.length){
          clearInterval(addr)
        }
    },150)
})
