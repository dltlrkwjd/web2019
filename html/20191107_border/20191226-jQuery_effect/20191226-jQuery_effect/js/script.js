$(document).ready(function(){
	$(".showBtn").click(function(){
		//$(".ef_01").show();  //display:block
		//$(".ef_01").show("slow");  //1초만에 최종 가로값, 세로값으로 도달시킴
		//$(".ef_01").show("fast");
		//$(".ef_01").show(5000);  //시간을 직접 부여시 밀리세컨드 단위를 사용
		$(".ef_01").show(5000, function(){
			$(".ef_01").css("background", "#ffaaff");
		});
		//콜백함수 : (효과) 메서드가 실행이 완료된 후 그다음에 실행할 함수를 지칭
	});

	$(".hideBtn").click(function(){
		$(".ef_01").hide();  //display:none
		$(".ef_01").hide(0, function(){
			$(".ef_01").css("background", "#aaffff");
		});
	});

	//toggle() 메서드 : display:block => display:none로 변경 / display:none => display:block 변경 
	$(".cont").click(function(){
		$(".detail_cont").toggle(2000);
	});
	//stop() 메서드 : 이전 메모리상에서 걸려 있는 반복적인 요소를 제거하고 1회만 실행하도록 선언

	$(".fadeInBtn").click(function(){
		$(".ef_02").fadeIn();
	});
	$(".fadeOutBtn").click(function(){
		$(".ef_02").fadeOut();
	});






	

});