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
    background: #ddf;
    height: 200px;
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

* 상위 선택자의 반복을 피하고 복잡한 구조를 파악하기 편하게 작성이 가능

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
* '#{}'를 이용해서 코드의 어디든지 변수 값을 넣을 수 있음

