function rotateGun(e) {
	var xPos = e.clientX;
	var currentXPositionPercentage = xPos/newWidth;
	var amountToRotate = -15 + (currentXPositionPercentage * 50);
	$("#SZ1").css('transform', 'rotate('+amountToRotate+'deg)');
	
}