$('#projects div').css('letter-spacing', '-5px')

$(window).scroll(function(){
  $('#projects div').css('letter-spacing', (-5) + $(this).scrollTop()/30+'px')

if($(window).scrollTop() >= $('#projects div').offset().top/7){
  $('#projects div').css({'letter-spacing': '0em', transition: 'letter-spacing .4s'})
}
})

$('.late-fix').click(function(){
  $('#projects>div img').toggleClass('mate')
})
