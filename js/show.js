/* Copyright 2013 by Simo Haakana http://www.github.com/siimeon */
/* All Rights Reserved */

/* Show and hide part of menu */

$(document).ready(function(){
	var t = true;
	$('#avaa').on('click',function (e) {
		if (t == true){
			$('#harjoitukset').fadeIn("slow");
			t = false;
		}else{
			$('#harjoitukset').fadeOut("slow");
			t = true;
		}
	});
});