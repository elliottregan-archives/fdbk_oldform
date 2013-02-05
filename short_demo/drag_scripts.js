var menuBtn;
var panel;

window.onload = function () {
	menuBtn = document.getElementById('menu');
	panel = document.getElementById('foreground')
	menuBtn.onmousedown = menuBtn.ontouchstart = startDrag;

	// don't try to remove the mousedown ontouchstart; it makes the first drag
	// very slow.

}

function startDrag(e) {
	if (e.type === 'touchstart') {
		menuBtn.onmousedown = null;
		menuBtn.ontouchmove = moveDrag;
		menuBtn.ontouchend = function () {
			menuBtn.ontouchmove = null;
			menuBtn.ontouchend = null;
			menuBtn.ontouchstart = startDrag; // necessary for Dolfin; this is a bug
			if (currentPos >= -100) {
			  panel.setAttribute("style","-webkit-transform: translateX(0px)");
			  console.log('close');
			}
		}
	} else {
		document.onmousemove = moveDrag;
		document.onmouseup = function () {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}

	var pos = panel.offsetLeft;
	var origin = getCoors(e);

	function moveDrag (e) {
		var currentPos = getCoors(e);
		var deltaX = currentPos[0] - origin[0];
		
		positX = (pos + deltaX) + 'px';
		
		panel.setAttribute("style","left:" + positX);
		
		
//    panel.setAttribute("style", "left:"+positX)
		return false;
		/* cancels scrolling; Android 2.1 needs this ontouchstart, but that's a bug.
		iPhone and Android 2.2 allow it ontouchstart, but also ontouchmove
		Dolfin requires it ontouchmove */
	}

	function getCoors(e) {
		var coors = [];
		if (e.touches && e.touches.length) { 
			coors[0] = e.touches[0].clientX;
		} else {
			coors[0] = e.clientX;
		}
		return coors;
	}
}