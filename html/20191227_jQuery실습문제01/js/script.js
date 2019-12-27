$(document).ready(function(){
	
	$("#txt_ch").each(function(){
		$(this).css("color", "red")
		$(this).css("font-size","20px")
	});

	var $txt02 = $("#txt_02").text();

	$("#txt_04>span").text("쵸콜릿 무스");


	$("#ex_03").append('<p id="vo_05">중국</p>');
	$("#vo_05").css("color", "red");

	$("#ex_04").attr("src", "img/slide1.jpg");

	$("#ex_05").attr("src", "img/slide2.jpg");

	var $i = 0;
	$("#ex_06").attr("src", "img/slide3.jpg").animate({"margin-left":$i+=200}, 2000);

	$(".num_03").addClass("active");

	$(".pd_04").remove();












});