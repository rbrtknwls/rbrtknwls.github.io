var timer = 4000;

var i = 0;
var max = $('#c > li').length;
	$("#c > li").eq(i).addClass('active').css('left','0');
	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');


		if (i < max-1) {
			i = i+1; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('center','0').addClass('active').css('transition-delay','1.25s');

	
	}, timer);