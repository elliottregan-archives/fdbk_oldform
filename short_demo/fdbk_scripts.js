  
function $(id) {
	return document.getElementById(id);
}
  
//  $('#send').click(function() {
//    $('#form').fadeOut();
//    $('#connect').delay(400).fadeIn(200);
//  })

  
  
//  $('#connected').click(function() {
//    $('#connect').fadeOut();
//    $('#share').delay(400).fadeIn(200);
//  })
//
//  $('#menu').click( function() {
//    $('#foreground').toggleClass('slide_left');
//  })
  
//new FastClick(document.body);

function toStepTwo() {
  $("form").setAttribute("style", "display: none;");
  $("connect").setAttribute("style", "display: block;")
}

function toStepThree() {
  $("connect").setAttribute("style", "display: none;")
  $("share").setAttribute("style", "display: block;")
  
}