// /*속성 변경 및 삭제,추가*/
// var $chImg = document.getElementById("ch_img");
// var $chImg_attr_src = $chImg.src;
// console.log($chImg_attr_src); //값의 절대 경로

// var $chImg_getAttr_src = $chImg+getAttribute("src");
// console.log($chImg_getAttr_src); //실제로 존재하는 속성값만을 반환

// $chImg.setAttribute("src", "img/girl.png") //해당하는 속성명의 속성값을 변경하겠다는 의미

// $chImg.setAttribute("alt", "소녀 이미지");

// $chImg.setAttribute("class", "img01 girl_img"); //기존에 해당하는 속성명이 없다면 속성명을 붙이고, 속성값을 넣어준다.

// $chImg.setAttribute("class",""); //기존에 선언된 속성에 대한 속성값을 삭제

/*선택 요소 기준의 내부 문서의 내용을 변경, 생성, 삭제 */

var $sec_01 = document.getElementById("section_01");
console.log($sec_01);

$sec_01.innerHTML = "<p>상세페이지</p>"; //기존 하위 자식 요소를 변경

$sec_01.innerHTML = ""; //기존 하위 자식 요소를 모두 삭제

$sec_01.innerHTML = "<h4>상세 페이지 내용</h4>"

var $card = document.getElementById("card_img");
$card.onclick=function(){
	$card.setAttribute("src", "img/card.png");
	$card.setAttribute("alt", "카드 뒷면");
}
$card.onmouseover = function(){
	$card.setAttribute("src", "img/card.png");
	$card.setAttribute("alt", "카드 뒷면");
}
$card.onmouseout = function(){
	$card.setAttribute("src", "img/ace.png");
	$card.setAttribute("alt", "카드 앞면");
}