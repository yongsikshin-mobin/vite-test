# Vue 2 + Vite

### Getting Started

```
# yarn 설치
npm install -g yarn

# 초기 실행시 yarn, husky 세팅
yarn set version berry
yarn prepare

# localhost serve
yarn dev

# prod build
yarn build
```

```
directroy 구조
src - api -> rest api call
    - assets -> image, font, icon, css ...
    - components -> ui components
    - layout -> layout
    - router -> vue router definition
    - App.vue -> 최상위 컴포넌트
    - main.js -> Vue instance 생성
    - store -> vuex modules
    - .editorconfig -> editorconfig setting (단축키 ctrl+alt+l)
    - .eslintrc.cjs -> lint setting
    - style - helper.scss -> bootstrap helper css override, helper class 
            - theme.scss  -> 테마 색상 변수 선언 및 공통 css
    
index.html -> 최상위 템플릿
dist -> yarn build시 생성 운영배포시 필요
.yarn, node_modules -> package library
```

```
git commit 시 husky 자동 실행 ->

```
