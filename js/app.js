
//스크롤 생성여부 확인하는 함수
$.fn.hasScrollBar = function () {
    return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
};

// cell default  
let widthlength = 30; // 너비 

//창 로드시 cell크기 조절
while($("#gridContainer").hasScrollBar()){
  widthlength -= 1;
  $("#gridContainer .group .cell").css({"width":widthlength+"%"});
}

// 화면 크기 변경시 cell 크기 조절
$( window ).resize(function() {
    hasScrollBarfunction();
});

function hasScrollBarfunction(){
  while($("#gridContainer").hasScrollBar()){
    widthlength -= 1;
    if(widthlength > 0){
      $("#gridContainer .group .cell").css({"width":widthlength+"%"});
    }else{
      break;
    }
  }
 
  if(!$("#gridContainer").hasScrollBar()){
    while(!$("#gridContainer").hasScrollBar()){
      widthlength += 1;
      $("#gridContainer .group .cell").css({"width":widthlength+"%"});
      if($("#gridContainer").hasScrollBar()){
        widthlength -= 1;
        $("#gridContainer .group .cell").css({"width":widthlength+"%"});
        break;
      }
    }
  }
}