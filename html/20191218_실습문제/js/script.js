

var $newDate = new Date();

var $nowYear = $newDate.getFullYear();
var $nowMonth = $newDate.getMonth()+1;
var $nowDate = $newDate.getDate();
var $nowDay = $newDate.getDay();
var $nowHours = $newDate.getHours();
var $nowMinutes = $newDate.getMinutes();
var $nowSeconds = $newDate.getSeconds();

var arr_day = ["일", "월", "화", "수", "목", "금", "토"]; 


var $result_01 = document.getElementById("result_01");

if($nowDay == 0){
	nowday = "일";
}else if($nowDay==1){
	nowday = "월";
}else if($nowDay==2){
	nowday = "화";
}else if($nowDay==3){
	nowday = "수";
}else if($nowDay==4){
	nowday = "목";
}else if($nowDay==5){
	nowday = "금";
}else{
	nowday = "토";
}

//$result_01.innerHTML = $nowYear+"년 "+$nowMonth+"월 "+$nowDate+"일 "+nowday+"요일, "+$nowHours+" : "+$nowMinutes+" : "+$nowSeconds;
$result_01.innerHTML = $nowYear+"년 "+$nowMonth+"월 "+$nowDate+"일 "+arr_day[$nowDay]+"요일, "+$nowHours+" : "+$nowMinutes+" : "+$nowSeconds;

var $result_02 = document.getElementById("result_02");

var $str = "welcom to my home";
var $ch_str = $str.replace("home", "homepage");

$result_02.innerHTML = $ch_str;


var $result_03 = document.getElementById("result_03");
var $arr_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];

function chgImg(){
	var $arr_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
	$result_03.innerHTML = "<img src='img/"+$arr_01[0]+"'>"+"<img src='img/"+$arr_01[1]+"'>"+"<img src='img/"+$arr_01[2]+"'>";
}
chgImg();

var $kakao_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $kakao_02 = ["카카오 소풍", "카카오 나들이", "카카오 휴가"];
var $result_04 = document.getElementById("result_04");
$result_04.innerHTML = "<div class='kakao_bx'><img src='img/"+$kakao_01[0]+"'><span>"+$kakao_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[1]+"'><span>"+$kakao_02[1]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[2]+"'><span>"+$kakao_02[2]+"</span></div>";

var $img_01 = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg",]
var i = 0;
var $result_05 = document.getElementById("result_05");
var $slide_05 = document.getElementById("slide");
function nextPrev(){
	
	if( i >= $img_01.length-1){
		i = 0;
		$slide_05.setAttribute("src", "img/"+$img_01[i]);
	}else{
		i++;
		$slide_05.setAttribute("src", "img/"+$img_01[i]);
	}
}

var $res_06 = document.getElementById("res_06")
var k = 1;
function subNext(){
	$res_06.setAttribute("src", "img/sub_0"+k+".jpg");
	k++;
	if(k>3){
		k=1;
	}
}


