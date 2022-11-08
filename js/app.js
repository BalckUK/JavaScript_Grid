$.fn.hasScrollBar = function () {
    return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
};

// 스크롤 존재할 경우 제일 하단으로 이동
if ($("#gridContainer").hasScrollBar()) {
  console.log("생성됨")
}