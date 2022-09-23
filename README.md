# Vue 2 + Vite

### Getting Started

```
# yarn 설치
npm install -g yarn

# 초기 실행시 yarn berry setting
yarn set version berry

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
index.html -> 최상위 템플릿
dist -> yarn build시 생성 운영배포시 필요
.yarn, node_modules -> package library
```
