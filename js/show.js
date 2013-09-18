/* Copyright 2013 by Simo Haakana http://www.github.com/siimeon */
/* All Rights Reserved */

/* Show and hide part of menu */

$(document).ready(function(){
	var t = true;
	$('#btn').on('click',function (e) {
		if (t == true){
			$('#lst').fadeIn("slow");
			t = false;
		}else{
			$('#lst').fadeOut("slow");
			t = true;
		}
	    /*.toggleClass('show');*/
	});
});