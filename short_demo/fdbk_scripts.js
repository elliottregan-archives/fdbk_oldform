window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

function $(id) {
	return document.getElementById(id);
};

function toStepTwo() {
  window.scroll(0,0);
  $("form").setAttribute("style", "display: none;");
  $("connect").setAttribute("style", "display: block;");
};

function toStepThree() {
  $("connect").setAttribute("style", "display: none;");
  $("share").setAttribute("style", "display: block;");
};