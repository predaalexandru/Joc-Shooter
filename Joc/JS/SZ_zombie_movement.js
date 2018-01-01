//Functia de a crea un zombi
function SZ_createZombie(whichOne) {
	var div = document.createElement('div');
	
	div.setAttribute('style', 'position: fixed; top:0, left:0;')
	
	var top_position = $('#SZ0').height() * 0.435;
	
	var left_position = Math.floor(Math.random() * ($('#SZ0').width())-(ratio*50)) + (ratio*50);
	
	//pozitionarea zombi
	div.style.left = left_position + 'px';
	div.style.top = top_position + 'px';
	
	div.id = 'zombie' + whichOne;
	
	//afisare pe ecran
	document.body.appendChild(div);
	
	setup_zombie_SS(whichOne);
}