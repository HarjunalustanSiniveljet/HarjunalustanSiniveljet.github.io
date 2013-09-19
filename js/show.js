/* Copyright 2013 by Simo Haakana http://www.github.com/siimeon */
/* All Rights Reserved */

/* Show and hide part of menu */

$(document).ready(function(){
	var t = true;
	$('#open_btn').on('click',function (e) {
		if (t == true){
			$('#show_menu').fadeIn("slow");
			t = false;
		}else{
			$('#show_menu').fadeOut("slow");
			t = true;
		}
	});
});