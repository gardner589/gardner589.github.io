$(document).ready(function(){
<<<<<<< HEAD

  $('#content').toggle()
  $('#face h1').hide();
  $('#face p').hide();
  setTimeout(function(){
    $('#face h1').toggle(1000)
    $('#face p').toggle(1000)
}, 1500);
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
=======
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
>>>>>>> v4
