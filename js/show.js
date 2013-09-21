/* Copyright 2013 by Simo Haakana http://www.github.com/siimeon */
/* All Rights Reserved */

/* Show and hide part of menu */

$(document).ready(function(){
	var t = true;
	var j = true;
	$('#open_btn').on('click',function (e) {
		if (t == true){
			$('#show_menu').slideDown("slow");
			t = false;
		}else{
			$('#show_menu').slideUp("slow");
			t = true;
		}
	});
	$('#mobile_menu').on('click',function (e) {
		if (j == true){
			
			$('[name="mobile_hide"]').show("slow");
			j = false;
		}else{
			
			$('[name="mobile_hide"]').hide("slow");
			j = true;
		}
	});
});