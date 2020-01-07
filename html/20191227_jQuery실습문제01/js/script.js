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

	var $img_arr = [
		{$dataSrc : "img/menu_fashion.jpg", $dataType : "패션"},
		{$dataSrc : "img/menu_beauty.jpg", $dataType : "뷰티"},
		{$dataSrc : "img/menu_living.jpg", $dataType : "리빙"},
		{$dataSrc : "img/menu_kids.jpg", $dataType : "유아동"}
	];

	var $apbox = `<li><div class="rgba"><a href='#'></a></div></li>`;

	for(i=0; i<=$img_arr.length-1; i++){
		$(".menu").append($apbox);
	}

	$(".menu li").each(function(index){
		$(this).css("background-image", "url("+$img_arr[index].$dataSrc+")");
		$(this).find("a").text($img_arr[index].$dataType);
	});

	var $images_arr = [
		{$dtSrc : "img/tab_01.jpg", $dtType : "SACAI", $dtTitle : "사카이, 뉴욕 타임스와 협업해 한정판 티셔츠 출시", $dtText : "유명 패션 브랜드와 미국의 언론사가 협업한 티셔츠가 나왔다. 패션 브랜드 사카이는 이달 초 뉴욕 타임스의 ‘Truth(진실)’ 캠페인을 디자인에 반영한 협업 제품을 한정판으로 출시했다. 세계적 언론사인 뉴욕 타임스는 저널리즘의 독립성과 진실을 위한 투쟁이라는 명제 아래 작년 2월 ‘The Truth Is Hard(진실은 어렵다)’라는 광고캠페인을... " },
		{$dtSrc : "img/tab_02.jpg", $dtType : "REISS", $dtTitle : "복고 바람 타고 올 여름 주름 잡는 주름치마!", $dtText : "올해 특히 인기를 끄는 디자인은 무릎을 덮는 긴 기장의 주름치마다. 주름치마는 여성미를 드러낼 수 있는 대표적인 옷인데 움직임에 따라 찰랑거리며 여성스러움을 극대화 해준다. 최근에는 티셔츠, 운동화와 함께 편안한 스타일로 연출하는 것이 유행이다."},
		{$dtSrc : "img/tab_03.jpg", $dtType : "DIESEL", $dtTitle : "디젤, 아시아 시장 겨냥 컬렉션 설명회 서울 개최", $dtText : "이탈리아 패션 브랜드 디젤이 이달 5일 강남구 청담동에서 아시아 지역 패션 관계자들을 대상으로 한 신규 컬렉션 설명회를 개최한다. 디젤은 아시아∙태평양 PR본사 주관으로 매년 신규 컬렉션 설명회를 진행하는데 서울에서 개최하는 것은 이번이 처음이다. 이번 행사에는 한국의 패션 관계자,인플루언서,백화점 바이어들뿐만 아니라 중" }
	];

	$(".tab_btn>div").each(function(index){
		$(this).text($images_arr[index].$dtType);

	});

	$(".tab_box>div").each(function(index){
		$(this).find(".img").css("background-image", "url("+$images_arr[index].$dtSrc+")");
		$(this).find(".title").text($images_arr[index].$dtType);
		$(this).find(".sub").text($images_arr[index].$dtTitle);
		$(this).find(".text").text($images_arr[index].$dtText);
	});

	$(".tab_btn>div").click(function(){
		var $index = $(this).index();
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").removeClass("activeBox");
		$(".tab_box>div").eq($index).addClass("activeBox");
		$(".bg-bk").animate({"left":33.33*$index+"%"}, 500);
	});

	var $im_arr = [
		{$datSrc : "img/slide_01.jpg"},
		{$datSrc : "img/slide_02.jpg"},
		{$datSrc : "img/slide_03.jpg"},
		{$datSrc : "img/slide_04.jpg"}
	];

	$(".slide_num>li").click(function(){
		var $index = $(this).index();
		$(".slide_num>li").removeClass("act_btn");
		$(this).addClass("act_btn");
		$(".slider>li").removeClass("act_img");
		$(".slider>li").eq($index).addClass("act_img");

	});

	$(".slider>li").each(function(index){
		$(this).css("background-image", "url("+$im_arr[index].$datSrc+")")
	});













});