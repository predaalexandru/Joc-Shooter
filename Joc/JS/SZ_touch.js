var canIclick = 0;

//Functie incarcare arma
function reloadGun(e) {
	if(canIclick==0) {
		canIclick = 1;
		$("#SZ1").animateSprite("play", "reload");
	}
}

//Functie trage arma
function fireGun(e) {
	if(canIclick==0) {
		canIclick = 1;
		$("#SZ1").animateSprite("play", "fire");
	}
}

//Functie pentru a tine cont de hit-uri
var zombieHits_counter = [0,0,0,0,0,0];

var zombieHits_limits = [2,1,3,2,1,3];

function zombieHit(whichOne) {
	zombieHits_counter[whichOne]++;
	
	if(zombieHits_counter[whichOne] >= zombieHits_limits[whichOne]) {
		SZ_resetZombie(whichOne+1);
	}
}