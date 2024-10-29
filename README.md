# Aurora Portfolio

[Nuxt.js](https://nuxtjs.org/) 로 구축된 포트폴리오 템플릿입니다.


## Demo

[Aurora](https://yjineey.github.io/aurora/) 에서 실시간 데모를 볼 수 있습니다.

## Features

-  [Nuxt Content](https://content.nuxt.com/) 기반의 콘텐츠 중심 모드
- 간단하고 강력한 [Nuxt Studio](https://nuxt.studio/)  편집기 지원
- [NuxtUI](https://ui.nuxt.com/) 사용 UI 컴포넌트 포함
- [Tailwind CSS](https://tailwindcss.com/) 스타일 적용
- [Resend](https://resend.com/) 을 활용한 작동하는 연락처 폼
- [Nuxt i18n](https://i18n.nuxtjs.org/) 을 통한 다국어 지원
-  [Nuxt OG Image](https://nuxtseo.com/og-image/getting-started/installation) 를 이용한 오픈 그래프 이미지 지원
- 자동 생성 robots.txt 를 위한  [Nuxt Robots](https://sitemap.nuxt.com/) 
-  공식 Nuxt 설정을 사용한 [ESLint](https://eslint.org/)
- 타입스크립트 지원
- [Nuxt Image](https://image.nuxt.com/) 로 이미지 최적화
- [Vue Composition Collection (Vueuse)](https://vueuse.org/) 활용


## Quick Setup

1. 레포지토리를 클론하거나 스토어에서 다운로드합니다
```bash
git clone https://yjineey.github.io/aurora/
```

2. 의존성을 설치합니다
```bash
npm run install
```

3. `.env.example`  파일을  `.env`로 복사한 후 필요한 값을 입력합니다

```bash
cp .env.exemple .env
```

4. 개발 서버를 시작합니다
```bash
npm run dev
```

5. 정적 프로젝트를 생성합니다
```bash
npm run generate
```

6. 빌드한 파일을 배포합니다
```bash
npm run deploy
```


## 프로젝트 구조

📂 프로젝트 루트  
├── `app.config.ts` - 글로벌 설정 파일  
├── `assets` - 이미지, 스타일시트 등 정적 파일이 포함된 폴더  
├── `components` - Vue 컴포넌트 파일이 포함된 폴더  
├── `content` - Nuxt Content로 관리되는 모든 콘텐츠 파일을 포함하는 폴더  
│   ├── `works` - 작업 관련 Markdown 파일이 위치한 폴더  
│   ├── `articles` - 아티클 관련 Markdown 파일이 위치한 폴더  
│   └── `...` - 기타 Markdown 또는 JSON 파일  
├── `layouts` - 공통 레이아웃 파일이 포함된 폴더  
├── `pages` - 각 페이지의 Vue 파일이 위치한 폴더  
├── `public` - 공개 파일을 포함하는 폴더 (favicon, robots.txt 등)  
├── `store` - Nuxt 상태 관리를 위한 폴더  
└── `nuxt.config.ts` - Nuxt 설정 파일  




</details>





