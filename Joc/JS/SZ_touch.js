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