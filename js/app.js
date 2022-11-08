
//스크롤 생성여부 확인하는 함수
$.fn.hasScrollBar = function () {
    return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
};

// cell default 기본너비 
var widthlength = 30;

//창 로드시 cell크기 조절
while($("#gridContainer").hasScrollBar()){
  widthlength =  widthlength - 1
  $("#gridContainer .group .cell").css({"width":widthlength+"%"});
}

// 화면 크기 변경시 cell 크기 조절
$( window ).resize(function() {
    while($("#gridContainer").hasScrollBar()){
      widthlength =  widthlength - 1
      $("#gridContainer .group .cell").css({"width":widthlength+"%"});
    }
});
