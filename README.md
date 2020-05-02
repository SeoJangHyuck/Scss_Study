# SCSS 개발 가이드

Angular 개발에 필요한 SCSS(Sass) 가이드

## 1. SCSS 개요

* Sass(Syntactically Awesome Style Sheets)의 3버전을 바탕으로 새롭게 등장
* CSS 구문과 Sass의 모든 기능을 지원
* SASS 컴퍼일러로 SCSS 파일이 CSS 파일이됨

```sass
.content                       // Sass
  width: 100px
  div
    background: #ddf
    height: 200px
    &>:nth-child(n)
      margin-bottom: 10px
```
```scss
.content {                     // SCSS
  width: 200px;
  div {
    background: #ddf;
    height: 200px;
    &>:nth-child(n) {
      margin-bottom: 10px;
    }
  }
}
```

## 2. SCSS 기능

### -  중첩(Nesting)과 상위 선택자(&)

* 상위 선택자의 반복을 피하고 작성이 가능
* 선택자간 부모, 자식, 자손구조를 파악하기 쉬움

```css
.content{                     // CSS
    width: 200px;             
}
.content div{                 // 선택자가 중복 발생
    background: #ddf;
    height: 200px;
}
div>:nth-child(n){             // 어디 위치의 선택자인지 파악하기 어려움
    margin-bottom: 10px;
}
```
```scss
.content {                     // SCSS
  width: 200px;
  div {                        // 중첩문 안에 작성하면 상위 선택자의 자손으로 선언가능 
    background: #ddf;
    height: 200px;
    &>:nth-child(n) {          // 'div'를 '&'로 치환하여 사용 가능
      margin-bottom: 10px;
    }
  }
}
```

### - 속성 중첩

* 묶일수 있는 속성끼리 중첩 작성이 가능

```css
p {                             // CSS
    font-size: 30px;
    font-weight: bold;
}
```
```scss
p {                             // SCSS
    font: {
        size: 30px;
        weight: bold;
    }
}
```

### - 변수 선언

* 반복적으로 사용되는 값을 변수로 선언 가능
* 변수 이름 앞에 항상 '$'를 붙임
* 해당 속성값이 무엇을 뜻하는지 변수명에 담을 수 있음
* '#{}'를 이용해서 코드의 어디든지 변수 값을 넣을 수 있음

```scss
$space_content: 20px;

h1 {
  height: calc(40px + #{$space_content});
}

p {
  margin-bottom: $space_content;
}
```

### - Import

* 다른 폴더위치의 SCSS 변수를 import 하여 사용가능

```scss
// 현재 경로: src/layout/colors.scss
$color-red: #f00;
```
```scss
// 현재 경로: src/app/header/header.scss
// @import "src/layout/colors.scss";
@import "src/layout/colors";  // 확장자 생략가능

p {
  color: $color-red;
}
```

* import를 경로를 어떤 파일에서도 간단하게 가져올수 싶을 경우
* 여기서 개발간 해당경로의 폴더를 import 전용 SCSS 폴더로 지정하는게 좋음

```json
// 현재 경로: angular.json
"options": {
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/layout"
    ]
  }
}
```
```scss
// 현재 경로: src/app/header/header.scss
@import "colors";

p {
  color: $color-red;
}
```

### '_' 가 포함된 파일명

* 파일명에 '_'이 포함되어 있으면 컴파일시 해당 파일은 컴파일 되지않음
* '_'가 포함되지 않은 파일에 '_'가 포함된 파일을 import 할 경우 해당파일 컴파일될때 포함되어 하나의 파일로 컴파일이 됨
* angular 개발시 import 용도의 SCSS 파일은 '_'를 붙일 것을 권장
* import 작성시 '_'를 생략해도 sass-loader가 감지하여 컴파일 가능

```scss
// _colors.scss 파일
@import 'colors'
```
