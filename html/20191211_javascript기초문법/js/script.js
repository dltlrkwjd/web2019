//javascript 객체 문법

/*객체 구성*/

var cell_phone = new Object(); //cell_phone라는 변수를 새로운 객체로 생성하겠다는 것을 의미

cell_phone.width = "8cm";
cell_phone.height = "14cm";
cell_phone.weight = "200g";
cell_phone.color = "classic blue";

document.write(cell_phone.width, "<br>");
document.write(cell_phone.height, "<br>");
document.write(cell_phone.weight, "<br>");
document.write(cell_phone.color, "<br>");

/*날짜 객체*/
var $t = new Date(); //연, 월, 일, 요일, 시간(시, 분, 초 등)의 날짜 정보를 받아오겠다는 의미
var nowYear = $t.getFullYear(); //연도정보
var nowMonth = $t.getMonth()+1; //1월은 시스템 데이터 값에서 "0"이라는 값을 가져옴
var nowDate = $t.getDate(); //일 정보 (서수개념-첫째날, 둘째날,...) 1일에 대한 데이터의 값은 '1'
var nowDay = $t.getDay(); //요일 정보(일:0~토:6)
var nowHours = $t.getHours(); //현재 시 정보
var nowMinutes = $t.getMinutes(); //현재 분 정보
var nowSeconds = $t.getSeconds(); //현재 초 정보


document.write("현재 연도 : "+nowYear, "<br>");
document.write("현재 월 : "+nowMonth, "<br>");
document.write("현재 일 : "+nowDate, "<br>");
if(nowDay == 0){
	document.write("현재 요일 : 일요일", "<br>");
}else if(nowDay == 1){
	document.write("현재 요일 : 월요일", "<br>");
}else if(nowDay == 2){
	document.write("현재 요일 : 화요일", "<br>");
}else if(nowDay == 3){
	document.write("현재 요일 : 수요일", "<br>");
}else if(nowDay == 4){
	document.write("현재 요일 : 목요일", "<br>");
}else if(nowDay == 5){
	document.write("현재 요일 : 금요일", "<br>");
}else{
	document.write("현재 요일 : 토요일", "<br>");
}

document.write("현재 시 : "+nowHours, "<br>");
document.write("현재 분 : "+nowMinutes, "<br>");
document.write("현재 초 : "+nowSeconds, "<br>");


var mybirth = new Date("1992-09-30");
var theYear = mybirth.getFullYear();
var theMonth = mybirth.getMonth()+1;
var theDate = mybirth.getDate();
var theDay = mybirth.getDay();

if(theDay == 0){
	ch_day = "일요일";
}else if(theDay==1){
	ch_day = "월요일";
}else if(theDay==2){
	ch_day = "화요일";
}else if(theDay==3){
	ch_day = "수요일";
}else if(theDay==4){
	ch_day = "목요일";
}else if(theDay==5){
	ch_day = "금요일";
}else{
	ch_day = "토요일";
}


document.write(theYear+"년 "+theMonth+"월"+theDate+"일은 "+ch_day+"입니다.", "<br>");

/*요일별 이미지 적용하기*/

var $n_date = new Date();
var $nDay = $n_date.getDay();

if($nDay == 0){
	document.write("<img src='images/img-day/sunday.gif'>");
}else if($nDay == 1){
	document.write("<img src='images/img-day/monday.gif'>");
}else if($nDay == 2){
	document.write("<img src='images/img-day/tuesday.gif'>");
}else if($nDay == 3){
	document.write("<img src='images/img-day/wednesday.gif'>");
}else if($nDay == 4){
	document.write("<img src='images/img-day/thursday.gif'>");
}else if($nDay == 5){
	document.write("<img src='images/img-day/friday.gif'>");
}else if($nDay == 6){
	document.write("<img src='images/img-day/saturday.gif'>");
}

/*계절별 이미지 변경*/

var $nMonth = $n_date.getMonth()+1;
if($nMonth>=3 && $nMonth<=5){
	document.write("<img src='images/img-season/img-m.jpg'>", "<br>");
}else if($nMonth>=6 && $nMonth<=8){
	document.write("<img src='images/img-season/img-s.jpg'>", "<br>");
}else if($nMonth>=9 && $nMonth<=11){
	document.write("<img src='images/img-season/img-f.jpg'>", "<br>");
}else{
	document.write("<img src='images/img-season/img-w.jpg'>", "<br>");
}	

/*숫자(Number) 객체*/
document.write("<h3>숫자(Number) 객체</h3>")
var maxNum = Math.max(12, 24, 5, 3, 30); //숫자 중에서 가장 큰 값을 출력
var minNum = Math.min(12, 24, 5, 3, 30); //숫자 중에서 가장 작은 값을 출력

document.write("최대값 반환하기 : "+maxNum, "<br>");
document.write("최소값 반환하기 : "+minNum, "<br>");

var num = 2.52345;
var roundNum = Math.round(num); //저장된 숫자의 반올림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 반올림을 적용)
document.write("반올림 적용하기 : "+roundNum, "<br>");

var floorNum = Math.floor(num); //저장된 숫자의 내림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 반올림을 적용)
document.write("내림 적용하기 : "+floorNum, "<br>");

var ceilNum = Math.ceil(num); //저장된 숫자의 올림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 올림을 적용)
document.write("올림 적용하기 : "+ceilNum, "<br>");

var randomNum = Math.random(); //0~1 사이의 숫자(실수)를 반환  (소수점 아래 자리까지 출력)
document.write("무작위 숫자 가져오기 : "+randomNum, "<br>");

var piNum = Math.PI;
document.write("원주율 가져오기 : "+piNum, "<br>");

/*0~10 사이의 숫자를 난수로 반환*/
var randomNum = Math.random()*10; //0~1 사이의 숫자(실수)를 반환  (소수점 아래 자리까지 출력)
document.write("0~10 사이 무작위 숫자 가져오기 : "+randomNum, "<br>");

/*0~10 사이의 정수를 난수로 반환*/
var randomNum = Math.floor(Math.random()*10); //0~1 사이의 숫자(실수)를 반환  (소수점 아래 자리까지 출력)
document.write("0~10 사이 무작위 정수값 가져오기 : "+randomNum, "<br>");

/*폰트 사이즈를 10~110px 이하까지 랜덤으로 적용*/
document.getElementById("txt").style.fontSize = Math.floor((Math.random()*100)+10)+"px";

//document : 문서라는 객체에서
//.getElementById("txt") : 아이디명이  'txt'라고 설정되어 있는 요소로 접근
//.style : 접근한 요소에 스타일을 적용
//.fontSize : 폰트의 크기를 인라인 스타일 시트로 직접 적용하겠다는 의미
//<p id="txt"> style="font-size:00px"</p>

/*랜덤을 통해서 출력되는 정수값을 1~9*/
var random_img = Math.floor((Math.random()*9)+1);
document.write("<img src='images/img-view/view"+random_img+".jpg'>", "<br>");
//만약 Math.random()으로부터 받아온 값이 0.0000000000001이라면 0.00000000000001*9=>0.00000000000009 좌측의 값으로부터 1을 더한다면 1.000000000000 => 내림(Math.floor)을 적용하기 떄문에 최종값은 1

//만약 Math.random()으로부터 받아온 값이 0.99이라면 0.99*9 => 8.91 좌측 값으로부터 1을 더한다면 9.91 => 내림 적용시 최종값은 9

var $num01
var $num02

$num01 = 36;
$num02 = 12;

var $sum = $num01 + $num02;
var $subtract = $num01 - $num02;
var $multiply = $num01 * $num02;
var $devide = $num01 / $num02;
// var $result = $num01 % $num02;

document.write("SUM = ", $sum, "<br>");
document.write("SUBTRACT = ", $subtract, "<br>");
document.write("MULTYPLY = ",$multiply, "<br>");
document.write("DEVIDE = ", $devide, "<br>");
// document.write("RESULT = ", $result, "<br>");

var $num03 = 36;
var $num04 = 12;
var $result;

$result = $num03+=$num04;
document.write("result (+=) = "+$result, "<br>");
$result = $num03-=$num04;
document.write("result (-=) = "+$result, "<br>");
$result = $num03*=$num04;
document.write("result (*=) = "+$result, "<br>");
$result = $num03/=$num04;
document.write("result (/=) = "+$result, "<br>");
$result = $num03%=$num04;
document.write("result (%=) = "+$result, "<br>");

// var $num_in = prompt("네 자리 이상의 수를 입력하시오.", "0000");
// console.log($num_in);
// if($num_in>=1000){
// 	if($num_in%7 == 0){
// 		document.write("입력한 값은 7의배수입니다.");
// 	}else{
// 		document.write("입력한 값은 7의 배수가 아닙니다.");
// 	}
// }else{
// 	alert("입력한 숫자가 유효하지 않습니다. 재입력 해주세요.");
// 	location.reload();
// }

// $bx_num = 1;

// for($bx_num=1; $bx_num<=10; $bx_num++){
// 	document.write("<div class='for_box class=clear'>"+$bx_num+"</div>");	
// }


document.write("<div class='clear'></div>");

var $box_limit = prompt("보여줄 박스의 개수를 입력하세요", "");
$m = 1;
for($m=1; $m<=$box_limit; $m++){
	document.write("<div class='m_box'>"+$m+"</div>");
}