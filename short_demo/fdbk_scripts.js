$(document).ready( function() {
  
  $('#send').click(function() {
    $('#form').fadeOut();
    $('#connect').delay(400).fadeIn(200);
  })
  
  $('#connected').click(function() {
    $('#connect').fadeOut();
    $('#share').delay(400).fadeIn(200);
  })

//new FastClick(document.body);
})