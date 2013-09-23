/* Copyright 2013 by Simo Haakana http://www.github.com/siimeon */
/* All Rights Reserved */

/* Show and hide part of menu */

$(document).ready(function(){
	var j = true;
	$('#mobile_menu').on('click',function (e) {
		if (j == true){
			
			$('[data-rwd="mobile_hide"]').show("slow");
			j = false;
		}else{
			
			$('[data-rwd="mobile_hide"]').hide("slow");
			j = true;
		}
	});
});
