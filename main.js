/* ================================================================
   건축사사무소 서울 / SEOUL Architects
   메인 스크립트 — 햄버거 메뉴
   ================================================================ */

(function() {

  // 햄버거 트리거: 모바일에서 #gnav 토글
  var trigger = document.getElementById('trigger');
  var gnav = document.getElementById('gnav');

  if (trigger && gnav) {
    trigger.addEventListener('click', function() {
      this.classList.toggle('open');
      gnav.classList.toggle('visible');
    });
  }

})();
