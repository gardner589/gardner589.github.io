$(document).ready(function(){

  $("#projects").slick({
      dots: true,
      speed: 500,
      infinite: true
    })

  var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PostgresSQL','AJAX','JSON','Git','Github','HTML5','CSS3','MongoDB','Bootstrap','Activerecord','mongoose ODM', 'Jasmine', 'Rspec', 'Selenium']
  $('#about-show').toggle()
  $('#projects').toggle()
  $('#skills').toggle()
  $('.about').click(function(){
    $('#about-show').toggle(1000)
    $('html, body').animate({
      scrollTop: $("#about-show").offset().top
    }, 2000);
  })
  $('.projects').click(function(){
    $('#projects').toggle(1000)
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 2000);
  })
  $('.skills').click(function(){
    $('#skills p').html('')
    $('#skills').toggle(1000)
    $('html, body').animate({
      scrollTop: $("#skills").offset().top
    }, 2000);
    x=0;
    addr = setInterval(function(){
        $('#skills p').append(' * '+skillsBlob[x])
        x++
        if(x == skillsBlob.length){
          clearInterval(addr)
        }
    },150)
  })
})
