function handleOrientation(event) {
  var oAbs = event.absolute;
  var oA = event.alpha;
  var oB = event.beta;
  var oG = event.gamma;
}

window.addEventListener("deviceorientation", handleOrientation, true);
