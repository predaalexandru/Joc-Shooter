function setup_SpriteSheet(div_name, image_name, no_of_frames, widthx, heightx) {
	var imageOrgRatio = $(div_name).height() / $(div_name).width();
	var ratio2 = Math.round(ratio * 10) / 10;
	var newDivisible = Math.round((widthx * ratio2) / no_of_frames);
	var newWidthx = newDivisible * no_of_frames;
	var newHeightx = heightx * ratio2;
	
	$(div_name).css('width', (newWidthx));
	$(div_name).css('height', (newHeightx));
	
	$(div_name).css('background-image', 'url('+image_name+')');
	$(div_name).css('background-size', newWidthx * no_of_frames + 'px ' + newHeightx + 'px');	
}

function setup_gun_SS() {
	setup_SpriteSheet("#SZ1", "Images/SZ_gun_SS.png", 28,150,150);
	$("#SZ1").animateSprite({
		fps:10,
		animations: {
			static: [0],
			reload: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
			fire: [24,25,26,27,28],
		},
		duration: 50,
		loop: false,
		complete: function() {
			'loop: false'
			//alert("Animation End");
			canIclick = 0;
		}
	});
}