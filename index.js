<script src="http://code.jquery.com/jquery-latest.js"></script>

//<![CDATA[
  // // 사용할 앱의 JavaScript 키를 설정해 주세요.
  Kakao.init('f76d220286c8862b47437d30637130ac');
  // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
  function sendLink() {
    Kakao.Link.sendScrap({
      requestUrl: 'https://developers.kakao.com'
    });
  }
//]]>


$(".chooseBox").click(function() {
	alert("Hello World!");
});

$(".btu").click(function() {
	alert("Hello World!");
});

$(document).ready(function(){
  $(".btu").click(function() {
alert("Hello World!");
  });
})