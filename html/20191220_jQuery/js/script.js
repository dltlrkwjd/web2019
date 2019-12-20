
$(document).ready(function(){




	/*is() 메서드 : 현재상태의 유무를 체크하여 true 또는 false를 반환(논리형 데이터로 변환)*/

	var $isChk = $("#agree").is(":checked");
	console.log($isChk);

	/*each 문은 선택자에 의해 해당하는 요소를 선택하지만 개별적인 요소로 순차접근함*/

	$(".each_box>li").each(function(index){ //index라는 매개변수, each문에서 접근시 최초의 인덱스 번호로 0을 자동으로 선택 index = 0
		//1. 자동으로 부여된 인덱스 번호의 0에 따라서 <li>Laptop</li> 접근 

		if(index > 2){
			$(this).css("color", "red");
		}else{
			$(this).css("color", "green");
		}
	});

	var $arr_box = ["orange", "red", "green", "yellow"];
	var $arr_txt = ["box_01", "box_02", "box_03", "box_04"];
	var $repeat = ""; // 데이터 형태가 정의되지 않은 초기값 => undefined

	for(i=0; i<4; i++){
		$repeat += "<div class='in_box'></div>";
	}

	$(".each_box_01").html($repeat);

	$(".each_box_01 .in_box").each(function(a){  //a = 0, 1, 2, 3
		$(this).css("background", $arr_box[a]);
		$(this).text($arr_txt[a]);
	});

	var $html_txt = $(".html_txt").html();
	console.log($html_txt);
	$(".html_txt").html("02. <span>사생결단</span>");
	$(".detail").text("-감추기");
	$(".detail").text("<span>-감추기</span>");
	//html() 메서드와는 달리 text() 메서드는 내부에 들어가는 데이터를 텍스트만 인식하기 떄문에 태그명을 포함하였다면 태그명 조차도 텍스트로 인식이 됨


	var $pic_img = $(".ch_img").attr("src");
	console.log($pic_img);
	$(".ch_img").attr({"src":"img/pic-2.jpg", "alt":"이미지2"});
	// $(".ch_img").attr("alt", "이미지2");

	$(".control_txt").addClass("active"); //선택자에 클래스를 추가
	$(".control_txt").removeClass("active"); //선택자에 클래스를 제거

	var $has_class = $(".control_txt").hasClass("active");  //선택자가 지정한 클래스를 갖고 있는지에 대한 유무를 판단 true 또는 false
	console.log($has_class);
	if($has_class == true){
		$(".control_txt").text("active 클래스가 있음");
	}else{
		$(".control_txt").text("active 클래스가 없음");
	}

	$(".control_txt").prop("id", "active_box");
	var $val = $("#user_name").val(); //기존의 value 속성의 값을 가져옴
	console.log($val);
	$("#user_name").val("이하늬");

	var $win_width = $(window).width(); //브라우저의 가로값
	var $win_height = $(window).height(); //브라우저의 세로값
	console.log("현재 브라우저의 가로값 : "+$win_width);
	console.log("현재 브라우저의 세로값 : "+$win_height);

	var $c_width = $(".property").width();
	console.log("width : "+$c_width);

	var $in_width = $(".property").innerWidth();
	console.log("innerWidth : "+$in_width);

	var $out_width = $(".property").outerWidth();
	console.log("outerWidth : "+$out_width);

	var $po_top = $(".po_in").position().top;
	console.log("position Y 위치 : "+$po_top);

	var $off_top = $(".po_in").offset().top;
	console.log("offset Y 위치 : "+$off_top);

	var $sc_top = $(window).scrollTop();
	console.log("브라우저 상단으로부터 스크롤 바가 이동한 위치 : "+$sc_top);

	$(window).scroll(function(){
		var $sc = $(window).scrollTop();
		console.log($sc);

		if($sc >= $off_top){
			$(".po_in").css("background", "#ffffaa");
		}else{
			$(".po_in").css("background", "#ffaaff");
		}
	});


	$(".po_in").click(function(){
		$("html, body").animate({scrollTop:$("body").offset().top}, 2000);
	});

















});