function $(id) {
	return document.getElementById(id);
}

function toStepTwo() {
  $("form").setAttribute("style", "display: none;");
  $("connect").setAttribute("style", "display: block;")
}

function toStepThree() {
  $("connect").setAttribute("style", "display: none;")
  $("share").setAttribute("style", "display: block;")
}