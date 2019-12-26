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
































});