/* ================================================================
   건축사사무소 서울 / SEOUL Architects
   메인 스크립트 — 햄버거 메뉴 + 헤더 sticky 토글
   ================================================================ */

(function() {

  // 1) 햄버거 트리거: 모바일에서 #gnav 토글
  var trigger = document.getElementById('trigger');
  var gnav = document.getElementById('gnav');

  if (trigger && gnav) {
    trigger.addEventListener('click', function() {
      this.classList.toggle('open');
      gnav.classList.toggle('visible');
    });
  }

  // 2) 헤더 sticky 토글: 스크롤 시 검은 배경 슬라이드인
  //    내부 페이지(.page-inner)는 항상 sticky 유지하므로 제외
  var header = document.querySelector('header');
  var body = document.body;

  if (header && !body.classList.contains('page-inner')) {
    var threshold = window.innerHeight * 0.8;
    window.addEventListener('scroll', function() {
      if (window.scrollY > threshold) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

})();
