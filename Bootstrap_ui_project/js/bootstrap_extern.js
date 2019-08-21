$(document).ready(function(){
	$(".nav_icon").click(function(){
		$("#mobile_menu").collapse('toggle');
		$("#mobile_menu").addClass("animated zoomIn");
	});
});
$(document).ready(function(){
	var str = "BE STYLISH";
	var i=0;
     setInterval(function(){
     	if(i < str.length)
     	{
     	document.querySelector(".add_header_one").innerHTML += str.charAt(i);
    }
     	i++;
     },100);
});
$(document).ready(function(){
	$("#search_data").click(function(){
		$("#search_box").collapse('toggle');
	});
	$("#search_box").on('show.bs.collapse',function(){
		$("#carousel_inner_data h1").animate({'marginTop':'50px'});
	});
	$("#search_box").on('hide.bs.collapse',function(){
		$("#carousel_inner_data h1").animate({'marginTop':'0'});
	});
});
$(document).ready(function(){
	$("#left").click(function(){
     $("#carousel-con").carousel('prev');
	});
		$("#right").click(function(){
     $("#carousel-con").carousel('next');
	});
});
$(document).ready(function(){
	var num = 0;
	var stp = setInterval(function(){
		num+=1;
		$("#num-1").html(num+"+");
		if(num == 100)
		{
			clearInterval(stp);
		}
	},100);

});
$(document).ready(function(){
	var num = 0;
	var stp = setInterval(function(){
		num+=1;
		$("#num-2").html(num+"+");
		if(num == 200)
		{
			clearInterval(stp);
		}
	},100);
	
});
$(document).ready(function(){
	var num = 0;
	var stp = setInterval(function(){
		num+=1;
		$("#num-3").html(num+"+");
		if(num == 50)
		{
			clearInterval(stp);
		}
	},100);
	
});
$(document).ready(function(){
	var num = 0;
	var stp = setInterval(function(){
		num+=1;
		$("#num-4").html(num+"+");
		if(num == 300)
		{
			clearInterval(stp);
		}
	},100);
	
});
