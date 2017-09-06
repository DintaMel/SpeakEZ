$(document).ready(function(){

// on load reads the text of the question
responsiveVoice.speak($('#question').text());

// reads the text of the question if clicked
$('#question').on('click',function(){
  responsiveVoice.speak($('#question').text());
})



})
