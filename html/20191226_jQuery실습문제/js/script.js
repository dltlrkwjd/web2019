$(document).ready(function(){
	$("#select").css({"font-size":"28px", "background":"#ffff00"});

	$(".sience_01, .sience_03").css({"color":"#00dd00"});

	$(".trend:eq(1), .trend:eq(3)").css({"background":"#aaffff"});

	$(".walk").not(".walk:eq(3)").css("color", "#0000ff");

	$(".menu>li:eq(2)>a").closest(".menu").css("background", "#ffff77");

	$(".port").closest(".main_menu").siblings("#side_menu").css("background", "#aaffff").find("span").css("color", "#ff0000");

	$("input[type='text']").css("background", "#ffffaa");

	$(".test_09>p").text("텍스트 변경 완료").css("background", "#aaffaa");

	$(".test_10>p").click(function(){
		$(this).slideUp();
	});

	$(".test_11>p").hover(function(){
		$(this).addClass("highlight");
	}, function(){
		$(this).removeClass("highlight");
	});

	$(".test_12 select").change(function(){
		var $result = $(this).val();
		console.log($result);
		$(".result").text($result);
	});

	var $width = $(window).width();
	var $height = $(window).height();

	$(".widthTxt").text($width);
	$(".heightTxt").text($height);

	var $scroll_top = $(window).scrollTop();

	$(".scroll_location").text($scroll_top+"px");

	$(".hide-btn").click(function(){
		$(".test_15>p").hide();
	});

	$(".show-btn").click(function(){
		$(".test_15>p").show();
	});

	$(".test_16>p").hide();

	$(".hide-btn02").click(function(){
		$(".normal").hide(); 
		$(".very-fast").hide(50);  
		$(".fast").hide("fast");
		$(".slow").hide("slow"); 
		$(".very-slow").hide(2000);
	});

	$(".show-btn02").click(function(){
		$(".normal").show(); 
		$(".very-fast").show(50);  
		$(".fast").show("fast");
		$(".slow").show("slow"); 
		$(".very-slow").show(2000);

	});

	$(".test_17>p").hide();

	$(".out-btn").click(function(){
			$(".test_17>p").fadeOut();
	});

	$(".in-btn").click(function(){
			$(".test_17>p").fadeIn();
	});

	$(".test_18>p").hide();

	$(".up-btn").click(function(){
			$(".test_18>p").slideUp();
	});

	$(".down-btn").click(function(){
			$(".test_18>p").slideDown();
	});

	var $move = 0;
	$(".test_19 button").click(function(){
		$(".test_19>p>img").animate({"margin-left":$move+=200}, 500);
	});

	$(".test_20>img").click(function(){
		var $kakao = $(".test_20>img").attr("title");
		console.log($kakao);
		$(".img_name").text($kakao);
	});

	$(".test_21 button").click(function(){
		$(".test_21>img").attr("src", "img/kakao_img2.jpg");
	});

	$(".left_add").click(function(){
		var $prepend = "<img src='img/wall_img1.jpg'></img>"
		$(".img_frame").prepend($prepend);
	});

	$(".right_add").click(function(){
		var $append = "<img src='img/wall_img3.jpg'></img>"
		$(".img_frame").append($append);
	});

	$(".before_add").click(function(){
		var $before = "<img src='img/wall_img4.jpg'></img>"
		$(".img_frame02>img").before($before);
	});

	$(".after_add").click(function(){
		var $after = "<img src='img/wall_img6.jpg'></img>"
		$(".img_frame02>img").after($after);
	});


	$(".effect_add").click(function(){
		$("#band").addClass("effect");
	});

	$(".effect_remove").click(function(){
		$("#band").removeClass("effect");
	});

	$(".effect_confirm").click(function(){
		var $has = $("#refresh").hasClass("effect");
		console.log($has);
		if($has == true){
		$("#refresh").addClass("effect");
		$("#refresh").removeClass("effect");
	}else{
		$("#refresh").removeClass("effect");
		$("#refresh").addClass("effect");
	}
	});

	$(".img_frame04>img").not(":eq(0)").hide();



	$(".btn_frame").click(function(){
		$(".img_frame04>img:eq(1)").fadeIn(1000)
		$(".img_frame04>img:eq(2)").fadeIn(3000)
		$(".img_frame04>img:eq(3)").fadeIn(5000)
	});













});