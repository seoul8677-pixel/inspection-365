# inspection-365

건축사사무소 서울 (SEOUL Architects) 공식 랜딩 페이지.

건축물 정기점검·실측·설계 자동화 서비스를 소개합니다.

## 기술 스택

- **호스팅**: GitHub Pages (정적 파일 호스팅)
- **DNS / CDN**: Cloudflare
- **도메인**: inspection-365.com
- **구성**: HTML + CSS only (빌드 도구 없음)

## 파일 구조

```
inspection-365/
├── index.html      # 5섹션 랜딩 페이지
├── style.css       # 다크 네이비 + 카카오 옐로우 테마
├── CNAME           # GitHub Pages 커스텀 도메인 설정
└── README.md
```

## 로컬 미리보기

빌드 과정이 없으므로 `index.html` 파일을 브라우저에서 직접 열면 됩니다.

```bash
# Windows
start index.html

# macOS
open index.html
```

또는 간단한 로컬 서버를 띄울 수도 있습니다.

```bash
python -m http.server 8000
# → http://localhost:8000
```

## 배포 흐름

1. `main` 브랜치에 push
2. GitHub Pages가 자동으로 정적 파일 서빙
3. Cloudflare DNS가 `inspection-365.com` → GitHub Pages로 라우팅
4. 약 1~5분 내 변경사항 반영

## 문의

- 카카오톡 채널: http://pf.kakao.com/_HvIMX
- 이메일: seoul8677@naver.com
- 블로그: https://blog.naver.com/flyinge
- 유튜브: https://www.youtube.com/@seoul-g5r
