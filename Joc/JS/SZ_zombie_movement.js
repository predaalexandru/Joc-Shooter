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
	
	SZ_animateZombie(whichOne);
	
}

//Animare zombi sa se apropie
function SZ_animateZombie(whichOne) {
	var timex = [13000,8000,16000,14000,10000,18000];
	
	var $zombiex = $("#zombie"+whichOne);
	
	$zombiex.css('transform', 'scale('+0+')');
	
	var amty = ($(window).height()*0.7);
	var ZS_ease = ['easeInSine','easeOutQuart','easeInOutQuad','easeInSine','easeOutQuart','easeInOutQuad'];
	
	//animare zombi
	$zombiex.delay(timex[whichOne-1]/3).animate({
		left: "+="+1+ "px",
	}, {
		easing: ZS_ease[whichOne-1],
		duration: timex[whichOne-1],
		step: function(now, fx) {
			if(fx.prop == "left") {
				var xx = (fx.pos)*16;
					if(xx > 15) {
						$(this).stop();
						SZ_resetZombie(whichOne);
					} else {
						$(this).css('transform','scale('+xx+')');
					}
			}
		},
		complete: function() {
		}
	});
}

function SZ_resetZombie(whichOne) {
	//atribuim un user pt div
	var $zombiex = $("#zombie"+whichOne);
	
	var top_position = $('#SZ0').height() * 0.435;
	var left_position = Math.floor(Math.random() * ($('#SZ0').width())-(ratio*50)) + (ratio*50);
	
	//repozitionare zombie
	$zombiex.css({top: top_position+'px', left: left_position+'px'});
	
	SZ_animateZombie(whichOne);
}