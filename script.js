$(document).ready(function(){
  var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PostgresSQL','AJAX','JSON','Git','Github','HTML5','CSS3','MongoDB','Bootstrap','Activerecord','mongoose ODM']
  $('#about-show').toggle()
  $('#projects').toggle()
  $('#skills').toggle()
  $('.about').click(function(){
    $('#about-show').toggle(1000)
  })
  $('.projects').click(function(){
    $('#projects').toggle(1000)
  })
  $('.skills').click(function(){
    $('#skills').toggle(1000)
    x=0;
    addr = setInterval(function(){
        $('#skills').append(skillsBlob[x]+', ')
        x++
        if(x == skillsBlob.length){clearInterval(addr)}
    },1500)
  })
})
