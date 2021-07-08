# 21.07.05 월요일

## 📗 모자스 1~3장

- Node.js는 자바스크립트 런타임 환경이다. 브라우저 외부에서 자바스크립트의 실행 환경을 제공하는 것이 목적이다. 따라서 브라우저가 제공하는 Web API를 사용하지 못한다. Web API에는 다음과 같은 것들이 있다.
    - Web API의 종류
        - DOM
        - BOM
        - Canvas
        - XMLHttpRequest
        - fetch
        - requestAnimationFrame
        - SVG
        - Web Storage
        - Web Component
        - Web Worker
        - 이외에도 엄청 많다. [MDN 링크](https://developer.mozilla.org/ko/docs/Web/API)
- Node.js는 클라이언트 사이드 Web API를 지원하지 않는 대신, ECMAScript와 고유의 API를 지원한다.

<br>

## 📗 Jest

- 테스트코드를 돌릴 때는 node XXX.js 가 아니라 yarn test 로 하는 거다..

<br>

## 📗 바닐라TS

CRA를 사용하여 React에서 TS 환경은 명령어 한 줄로 손쉽게 구성했었다. React가 아닌 바닐라TS(?) 환경은 어떻게 구성해야 할까?

1. TypeScript 프로젝트 시작하기

    ```tsx
    $ tsc --init
    ```

2. `tsconfig.json` 설정하기
    - 기본적으로 target, module, strict가 설정되어 있고 추가적으로 설정할 수 있다. 컴파일되는 파일들을 `dist` 폴더에 넣기 위해 `"outDir": "dist"` 를, 디버깅을 위해 `"sourceMap": true` 를 설정해주었다.

        ```json
        {
          "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "strict": true,
            "outDir": "dist",
            "sourceMap": true
          }
        }
        ```

3. 컴파일하기
    - ts 파일에 코드를 작성하고 `tsc` 명령어를 이용해서 컴파일한다. 그러면 우리가 설정한 `dist` 폴더에 js 파일과 sourcemap 파일이 생성된다.
4. watch mode 사용하기
    - 매번 변화가 있을 때마다 컴파일하는 것은 번거로운 일이다. watch mode를 사용하면 ts 파일에 변화가 있을 때 자동으로 컴파일해준다.

        ```tsx
        $ tsc -w

        // ts가 로컬에만 설치되어 있는 경우에는
        $ npx tsc -w
        ```

5. 린트 설정하기
    - TSLint는 2019년에 deprecated 되었다. TS와 JS에서 둘 다 사용 가능한 ESLint로의 마이그레이션을 위함이다. 따라서 ESLint로 설정을 해보자.

        ```tsx
        $ yarn add eslint --dev
        $ yarn run eslint --init // config 파일 손쉽게 생성. 여러가지를 물어본다.
        ```

    - 여기까지 했는데 뭔가 안 되는 느낌..? 프리티어만 작동하는 것 같다. 이 이상의 설정은 나중에 해보기로..

<br>

## 🥕 회고

- 모자스 1~3장 어렵거나 중요한 내용은 아니어서 술술 읽었다.
- 미션 복습을 하려고 오늘은 debounce, throttle 함수를 구현해보려고 했다. 리액트까지 쓸 필요도 없고 util 함수 정도로 만들어보려고 했고, TypeScript와 test code를 함께 써보려고 했다. 근데 리액트 CRA로 편하게 설정하던 것과 다르게, 하나하나 다 설정을 해줘야 했다. 이 환경설정하는 게 참 어렵다. 아직은 TS + test code (Jest 라이브러리를 사용하려고 했음) 를 CRA 없이 설정할 때 어떻게 해야 하는지 감이 잘 안 와서 내일 다시 해봐야겠다. 얼핏 보기로 babel 설정을 해줘야 하는 것 같다. 아예 webpack, babel부터 해보는 것도 괜찮을 듯
- 알고리즘 dfs 한 문제, 쉬운 문자열 한 문제 풀었다. dfs를 자유자재로 풀 수 있는 날이 올까? 😭 조급함을 조금 내려놓고 기초부터 쌓아가자..!

<br>
<br>

# 21.07.06 화요일

## 📕 Babel

[참고한 블로그](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)

ES2015+로 작성한 코드를 모든 브라우저에서 동작하도록 호환성을 지켜주는 바벨! JS 버전 뿐 아니라 TS, JSX와 같은 다른 언어들도 모든 브라우저에서 동작하는 JS로 바꿔준다. 이렇게 변환하는 것을 **트랜스파일**이라고 한다.

- 트랜스파일 : 추상화 수준을 유지한 상태로 코드를 변환
- 컴파일 : 변환 전후의 추상화 수준이 다름

기본적으로 바벨은 코드를 받아서 코드를 반환한다. 바벨은 세 단계로 빌드를 진행한다.

1. 파싱 (Parsing) : 코드를 읽고 추상 구문 트리 (AST)로 변환하는 단계
2. 변환 (Transforming) : 추상 구문 트리를 변경하는 단계. 실제로 코드를 변경
3. 출력 (Printing) : 변경된 결과물을 출력

1. 파싱 (Parsing) : 코드를 읽고 추상 구문 트리 (AST)로 변환하는 단계
2. 변환 (Transforming) : 추상 구문 트리를 변경하는 단계. 실제로 코드를 변경
3. 출력 (Printing) : 변경된 결과물을 출력

이 3단계에서, 바벨은 파싱과 출력만 담당하고 변환 작업은 다른 녀석이 처리하는데, 그게 바로 **플러그인**이다.

### 1. 플러그인

플러그인으로 동작하려면, 아래 코드와 같은 형태로 반환해야 한다. 이 객체(이 객체가 뭐임??)는 바벨이 파싱하여 만든 추상 구문 트리 (AST)에 접근할 수 있는 메소드를 제공한다. 그 중 하나가 `Identifier` 이다.

```jsx
// myplugin.js:
module.exports = function myplugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name

        // 바벨이 만든 AST 노드를 출력한다
        console.log("Identifier() name:", name)

        // 변환작업: 코드 문자열을 역순으로 변환한다
        path.node.name = name.split("").reverse().join("")
      },
    },
  }
}
```

바벨에는 다양한 플러그인이 있다. const를 var로 변경하는 작업을 해주는 건 [block-scoping 플러그인](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping)이다. 화살표 함수를 지원하지 않을 때 일반 함수로 변경하는 [arrow-function 플러그인](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)도 있다. 설치는 아래와 같이 하면 된다.

```jsx
// block-scoping plugin
$ npm install -D @babel/plugin-transform-block-scoping
or
$ yarn add -D @babel/plugin-transform-block-scoping

// arrow-function plugin
$ npm install -D @babel/plugin-transform-arrow-functions
or
$ yarn add -D @babel/plugin-transform-arrow-functions
```

바벨을 실행하는 것은 아래와 같이 플러그인 옵션을 붙여서 하면 된다.

```jsx
npx babel app.js \
  --plugins @babel/plugin-transform-block-scoping \
  --plugins @babel/plugin-transform-arrow-functions
```

근데 이렇게 실행하는게 말이나 되나??!! 사용하는 플러그인이 더 많아지면 입력해야 될 것도 더 많아진다. 편리하게 실행하기 위해 config 파일에 설정해주면 된다. (config 짱짱 👍) 프로젝트 루트에 `babel.config.js` 파일에 아래와 같이 작성해준다.

```jsx
// babel.config.js:
module.exports = {
  plugins: [
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-arrow-functions",
  ],
}
```

이렇게 config 파일에 설정해두면, 간단하게 `npx babel app.js` 라고만 쓰면 빌드가 된다.

### 2. 프리셋

필요한 플러그인을 일일이 설정하는 것은 굉장히 번거로운 일이다. 바벨에서는 목적에 맞게 여러 가지 플러그인을 세트로 모아서 제공한다. 이것을 **프리셋**이라고 한다. (plugin 배열을 리턴하는 함수를 만들면 커스텀 프리셋도 가능하다.) 바벨은 목적에 따라 몇 가지 [프리셋](https://babeljs.io/docs/en/presets)을 제공한다.

- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) for compiling ES2015+ syntax
- [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) for [TypeScript](https://www.typescriptlang.org/)
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) for [React](https://reactjs.org/)
- [@babel/preset-flow](https://babeljs.io/docs/en/babel-preset-flow) for [Flow](https://flow.org/)

### 3. env 프리셋 설정과 폴리필

env 프리셋은 단순하고 직관적인 사용법을 제공한다. `target` 옵션에 브라우저 버전명만 지정하면 env 프리셋이 이에 맞는 플러그인을 찾아 최적의 코드를 출력해낸다.

```jsx
// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79", // 크롬 79까지 지원하는 코드를 만든다
					ie: "11", // ie 11까지 지원하는 코드를 만든다
        },
      },
    ],
  ],
}
```

바벨은 ES6+를 ES5 버전으로 변환할 수 있는 것만 빌드한다. 그렇지 못한 것들은 **폴리필**이라고 부르는 코드조각을 추가해서 해결해야 한다. `useBuiltIns` 라는 옵션을 바꿔주면 된다. (기본값: false)

usage나 entry로 설정하면 폴리필 패키지 중 core-js를 모듈로 가져온다. 이전에 사용하던 babel/polyfile은 바벨 7.4.0부터 사용하지 않는다. 공식문서에 core-js의 버전은 minor 버전을 추천한다고 써있는데, 그 이유는 버전 3은 최신 기능의 폴리필을 포함하지 않을 수 있기 때문이라고 한다. (뭔말..?) [링크](https://prod.liveshare.vsengsaas.visualstudio.com/join?26608FAF9A3939945ED556100FD6198F6811)

```jsx
// babel.config.js:
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // 폴리필 사용 방식 지정
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
}
```

### 4. 웹팩으로 통합 (feat. babel-loader)

웹팩은 html, css, js 파일을 모두 하나로 합쳐 용량을 줄이는(?) 역할을 한다. 거의 뭐 필수적으로 사용해야 한다고 생각이 드는데.. 바벨 실행으로 트랜스파일링한 걸 웹팩을 또 실행해서 하나로 합치면 번거롭다. 웹팩해서 바벨 실행까지 함께 할 수 있는데, **babel-loader**라는 것을 사용하면 된다. (바벨 로더 외에도 css-loader 이런 것도 있음)

패키치를 설치한 후, 웹팩 설정에 로더를 추가하면 된다.

```jsx
$ npm install -D babel-loader
or
$ yarn add -D babel-loader

// webpack.config.js:
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      },
    ],
  },
}
```

`.js` 확장자로 끝나는 파일을 babel-loader가 처리하도록 설정한 상태이다. node_modules 폴더를 로더가 처리하지 않도록 예외처리 하는 방법은 [여기](https://github.com/babel/babel-loader#babel-loader-is-slow)를 참고

- `exclude` 옵션을 사용한다.
- 바벨 로더의 속도를 2배 빠르게 하려면, `cacheDirectory` 옵션을 사용하면 된다. *(궁금) 기본값이 false인데 속도를 빠르게 해주면 좋은 거니까 기본값을 true로 하면 안됐던걸까??? 왜 false로 했지..*

폴리필 사용 설정을 했다면 core-js도 설치해야 한다. 바벨 로더가 아래와 같은 코드를 만들 것이고, 웹팩은 따라서 core-js를 찾을 것이기 때문

```jsx
require("core-js/modules/es6.promise")
require("core-js/modules/es6.object.to-string")
```

```jsx
npm i core-js@2 // 버전 2로 패키지를 추가
```

마지막으로 웹팩으로 빌드하면, 미리 등록해놓은 npm build 스크립트의 webpack 명령어가 동작한다.

```jsx
npm run build
```

<br>

## 📕 모자스 4, 5장

### 4장. 변수

- `var` 키워드를 사용한 변수 선언은 선언 단계와 초기화 단계가 동시에 진행된다. 선언할 때 어떠한 값도 할당하지 않아도 undefined라는 값을 갖는다. 선언하지 않은 식별자에 접근하면 ReferenceError가 발생한다.
- 변수 선언은 소스코드가 한 줄씩 순차적으로 실행되는 시점(=런타임)이 아닌, 그 이전 단계에서 먼저 실행된다. 이걸 바로 **호이스팅**이라고 한다. 런타임에 앞서 소스코드의 평가 과정을 거치면서 변수 선언을 포함한 모든 선언문을 소스코드에서 찾아서 먼저 실행한다. 소스코드의 평가 과정이 끝나면 모든 선언문을 제외하고 소스코드를 한 줄씩 순차적으로 실행한다. (실행 컨텍스트에 포함된 개념)
- 변수 선언과 값의 할당을 하나의 문으로 단축해서 표현해도, 자바스크립트 엔진은 2개의 문으로 나누어 각각 실행한다. 변수 선언은 런타임 이전에 먼저 실행되고, 값의 할당은 런타임에 실행된다는 차이점이 있다.

### 5장. 표현식과 문

- 값(**value**)은 표현식(**expression**)이 평가(**evaluate**)되어 생성된 결과
    - 평가란, 식을 해석해서 값을 생성하거나 참조하는 것
    - `10 + 20; // 30` 이 식은 평가되어 숫자 값 30을 생성한다.
- 리터럴은 사람이 이해할 수 있는 문자 또는 미리 약속된 기호(`''` , `""` , `[]` , `{}` , `//` 등)로 표기한 코드. 런타임에 리터럴을 평가해 값을 생성한다.
    - 정수 리터럴, 부동소수점 리터럴, 2진수 ∙ 8진수 ∙ 16진수 리터럴, 문자열 리터럴, 불리언 리터럴, null 리터럴, undefined 리터럴, 객체 ∙ 배열 ∙ 함수 ∙ 정규표현식 리터럴이 있다.
- 표현식(**expression**)은 값으로 평가될 수 있는 문(**statement**)이다. 즉, 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다. 따라서 표현식은 값처럼 사용할 수 있고, 문법적으로 값이 위치할 수 있는 자리에는 표현식도 위치할 수 있다는 것을 의미한다.
- 문(**statement**)은 프로그램을 구성하는 기본 단위이자 최소 실행 단위다. 문의 집합으로 이뤄진 것이 바로 프로그램. 문을 작성하고 순서에 맞게 나열하는 것이 프로그래밍.
    - 문은 여러 토큰으로 구성된다. 토큰이란, 문법적인 의미를 가지며 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미한다. (토큰의 예시 - 키워드, 식별자, 연산자, 리터럴, 세미콜론, 마침표 등)
    - 문은 명령문이라고도 부른다. 선언문, 할당문, 조건문, 반복문 등이 있다.

        ```jsx
        // 변수 선언문
        var x;

        // 할당문
        x = 5;

        // 함수 선언문
        function foo() {}

        // 조건문
        if (x > 1) { console.log(x); }

        // 반복문
        for (var i = 0; i < 2; i++) { console.log(i); }
        ```

- 표현식인 문이 있고 표현식이 아닌 문이 있다. 이를 구분하는 간단한 방법은 변수에 할당해보는 것이다. 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있고, 표현식이 아닌 문은 할당할 수 없다.

    ```jsx
    // 할당문은 값으로 평가되기 때문에 변수에 할당할 수 있다.
    var foo = x = 100;
    console.log(foo); // 100 -> 에러 안 남
    ```
    
<br>

## 📕 HTTP 강의

HTTP에 대해 학습하기 전에, 인터넷 네트워크에 대해 알아보자. (HTTP도 결국은 인터넷 네트워크에서 동작하기 때문)

- 서버와 클라이언트 사이에는 인터넷이 존재
- 인터넷은 수많은 노드(라고 부르는 서버)들로 구성되어 있음. 노드 간의 정보 전달을 어떻게 할까?

### IP (Internet Protocol)

- 지정한 IP 주소에 데이터 전달
- **패킷(Packet)**이라는 통신 단위로 데이터 전달
    - 패킷에는 출발지 IP, 목적지 IP 정보, 메시지가 들어 있다.
    - 노드들이 패킷을 서로 던지면서 최종 목적지에 도달한다.
    - 요청, 응답 시 서로 다른 곳으로 (다른 노드들로) 전달될 수 있다. 인터넷 망이 복잡하기 때문에
- IP 프로토콜의 한계
    - 비연결성 : 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송
    - 비신뢰성 : 중간에 패킷이 사라지거나 패킷이 순서대로 안 오는 경우가 있다.
    - 프로그램 구분 : 같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상인 경우 어떻게 구분? (예를 들면 한 PC에서 게임도 하고, 음악도 듣는 경우)

    → 이런 문제들을 해결해주는 것이 **TCP**

### TCP (Transmission Control Protocol)

<img src="https://user-images.githubusercontent.com/60209518/124644862-af8f5400-decd-11eb-8c5e-cbbe4c5daca3.png" width="60%">

출처 - [https://www.overcoded.net/network-protocol-layers-432211/](https://www.overcoded.net/network-protocol-layers-432211/)
TCP는 IP위에 살짝 올려져서 IP를 보완한다고 생각하면 됨

- TCP에는 출발지 PORT, 목적지 PORT, 전송 제어, 순서, 검증 정보... 이런 게 들어간다. IP에서 부족했던 정보를 보완
- TCP의 특징
    - 연결 지향 - TCP 3 way handshake (가상 연결) : 무턱대고 보내는 게 아니라 연결을 한 후에 보낸다.

        <img src="https://user-images.githubusercontent.com/60209518/124644902-ba49e900-decd-11eb-8044-88ffcea6f890.png" width="60%">

        요즘은 최적화가 되어서 ACK와 함께 데이터 전송이 가능하다.

    - 데이터 전달 보증 : 데이터 잘 받았다고 응답을 보내준다.
    - 순서 보장
    - 실제로는 더 많은 기능들이 있는데 이 정도만 알아두면 된다.

### UDP (User Datagram Protocol)

- 기능이 거의 없음.
- IP와 거의 같고, PORT와 체크섬 정도만 추가됨
- 데이터 전달 및 순서가 보장되지 않지만, 단순하고 빠름

<br>

## 🥕 회고

- [개발바닥](https://www.youtube.com/watch?v=oqAdL8Nw5j0) 채널에서 신입 개발자 파일럿 프로젝트에 대한 영상을 봤다. 레이어 나누기 (역할 나누기랑 비슷한 의미인 듯?), 테스트코드 작성, 쿠키, 세션 방식의 인증 (JWT가 엄청 중요한 건 아님)
- 오전에 너무 졸려가지고 11시 반부터 2시까지 밥도 안먹고 자버렸다. 왜 이렇게 졸렸을까?? 이러면 안돼~~~~
- babel에 대해서 공부했다. FE 클래스 때 처음 웹팩, 바벨을 접했을 땐 config.js가 뭔지도 잘 모르겠고, 어떤 옵션에 뭘 쓰면 뭐가 어떻게 되는 건지 1도 몰랐었는데 지금 보니까 이해가 된다. 이해가 좀 되니까 공부하면서 재미가 있었다.
- 모자스 4, 5장을 읽었다. 변수와 표현식, 문에 대한 내용이었다. 아주 기초적인 내용이지만 제대로 모르고 있었다는 느낌이 들었다. 특히 표현식, 문은 말장난같이 느껴지고 책을 봐도 뭔소린지 잘 모르겠다. 표현식인 문, 표현식이 아닌 문 ㅋㅋ 다시 읽어봐야지
- 제로초님 블로그를 보고 [debounce, throttle을 구현](https://codesandbox.io/s/youthful-shannon-h4r27?file=/src/index.js)해보았다. (사실 거의 따라 썼다.) 개념은 알겠는데 코드로 구현한 건 왜 또 이해가 안 될까. setTimeout의 timer라는 개념을 잘 몰라서 그런 것 같다. timer를 콘솔로그로 찍어보니까 뭔 숫자가 나오는데 그 숫자가 의미하는 게 뭔지도 잘 모르겠다. 내일 학습해봐야겠다.
- 알고리즘 문제를 풀려고 했는데 치열하게 고민해보지 않았다. 머리를 써서 고민해보고 그래도 안 되면 그 때 답을 봐야 실력이 느는 거다. 편하게 얻을 수 있는 건 없다는 걸 명심하자~~~~

<br>
<br>

# 21.07.07 수요일

## 📘 Webpack

웹팩은 html, css, js 파일을 모두 하나의 파일로 합쳐주는 번들러이다. entry point에서 시작해서, 의존적인 모듈을 전부 찾아내서 하나의 결과물을 만들어낸다. 웹팩을 사용하기 위해서, 번들 작업을 하는 webpack 패키지와 웹팩 터미널 도구인 webpack-cli를 설치한다.

```jsx
$ npm install -D webpack webpack-cli
or
$ yarn add -D webpack webpack-cli
```

### 웹팩 설정하기

설치가 완료되면 `node_modules/.bin` 폴더에 실행 가능한 명령어가 몇 개 생긴다. `—-mode`, `—-entry`, `—-output` 옵션을 사용해서 코드들을 묶을 수 있다.

- `--mode` 웹팩 실행 모드 (개발 모드에서는 develop 지정)
- `--entry` 시작점 경로
- `--output` 번들링 결과물을 위치할 경로

```jsx
$ node_modules/.bin/webpack --mode development --entry ./src/app.js --output dist/main.js
```

매번 위와 같이 명령어를 치고 있을 수는 없다. `--config` 옵션으로 웹팩 설정 파일의 경로를 지정할 수 있는데 기본 파일명은 `webpack.config.js` 혹은 `webpackfile.js` 이다. `webpack.config.js` 파일을 만들어서 명령어로 설정했던 것을 코드로 구성해보자.

```jsx
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: "./src/app.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve("./dist"),
	},
}
```

- `output`에 설정한 `[name]` 에는 `entry`에 추가한 `main`이 문자열로 들어온다.
- `output.path` 는 절대 경로를 사용하기 때문에, path 모듈의 `resolve()` 함수를 사용해서 계산했다. path는 노드 코어 모듈 중 하나로, 경로를 처리하는 기능을 제공한다.
- Vending Machine 프로젝트 때 설정한 `webpack.config.js` [링크](https://github.com/dyongdi/fe-w7-vm/blob/Qtumn/webpack.config.js)
    - 위 예제와 약간 차이점이 있다.
    - entry point를 배열로 해서 두 개를 뒀고,
    - `path.resolve` 에도 인자를 두 개 넣었다.
    - `filename` 은 `bundle.js` 라고 명시해주었다.

웹팩 실행을 위해 npm 커스텀 명령어를 추가한다. 말도 안되게 길었던 명령어를 커스텀 명령어로 써주는 것이다.

```json
// package.json
{
	"scripts": {
		"build": "./node_modules/.bin/webpack"
	}
}
```

이제는 `npm run build` 로 웹팩 작업을 지시할 수 있게 되었다.

---

### 로더

웹팩은 모든 파일을 모듈로 바라본다. 자바스크립트 모듈 뿐 아니라 스타일시트, 이미지, 폰트까지 전부 모듈로 본다. 따라서 `import` 구문을 사용해서 자바스크립트 코드 안으로 가져올 수 있다.

이것이 가능한 이유가 바로 웹팩의 **로더** 덕분이다.

- 타입스크립트 같은 다른 언어를 자바스크립트 문법으로 변환해줌
- 이미지를 data URL 형식의 문자열로 변환함
- CSS 파일을 자바스크립트에서 직접 로딩할 수 있도록 해줌

VM 프로젝트에서 했던 설정을 보면, scss 파일을 entry point로 추가해줬는데, 그럴 필요 없이 main.js에서 바로 import 해서 사용하면 되는 것이다.

```json
// VM 프로젝트의 webpack.config.js 중 일부
"entry": ['./src/main.js', './src/sass/main.scss'],
```

자주 사용하는 로더는 4가지 정도가 있다.

- css-loader
- style-loader
- file-loader
- url-loader

### css-loader

CSS 파일을 자바스크립트에서 불러와 사용하려면, CSS를 모듈로 변환하는 작업이 필요하다. 이 작업을 css-loader가 해준다. 로더를 설치하고, 웹팩 설정에 로더를 추가한다.

```jsx
$ npm install -D css-loader
or
$ yarn add -D css-loader
```

```json
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["css-loader"],
			}
		],
	},
}
```

빌드를 하면 CSS코드가 자바스크립트로 변환된 것을 확인할 수 있다.

### style-loader

모듈로 변경된 스타일 시트는 돔에 추가되어야만 브라우저가 해석할 수 있다. css-loader로 처리하면 자바스크립트 코드로만 변경되었을 뿐, 돔에 적용되지 않았기 때문에 스타일이 적용되지 않는다.

style-loader는 자바스크립트로 변경된 스타일을 동적으로 돔에 추가하는 로더이다. CSS를 번들링하기 위해서는 css-loader와 style-loader를 함께 사용해야 한다. SASS를 사용했다면, sass-loader도 사용해야 한다.

로더를 설치하고, 웹팩 설정에 로더를 추가한다.

```jsx
$ npm install -D style-loader
or
$ yarn add -D style-loader
```

```json
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			}
		],
	},
}
```

배열로 설정하면 뒤에서부터 앞의 순서로 로더가 동작하기 때문에 style-loader를 앞에 써준다.

---

### 플러그인

로더가 파일 단위로 처리하는 반면, 플러그인은 번들된 결과물을 처리한다. 번들된 자바스크립트를 난독화하거나 특정 텍스트를 추출하는 용도로 사용한다. 플러그인도 마찬가지로 커스텀할 수 있다. 자주 사용하는 플러그인은 다음과 같다.

- BannerPlugin : 빌드된 결과 모드에 배너(주석)를 달 수 있음. 빌드 시간이나 커밋 정보 등을 써놓는다.
- DefinePlugin : 개발환경과 운영환경이 다른데, 대표적인 예로 API 서버 주소가 다를 수 있다. 이러한 환경 의존적인 정보를 소스코드가 아닌 곳에서 관리하는 것이 좋다. DefinePlugin은 이런 환경 정보를 제공한다. 또한 빌드 타임에 결정된 값을 어플리케이션에 전달할 때 사용하기도 한다.
- HtmlWebpackPlugin : HTML 파일을 후처리하는 데 사용한다. 빌드 타임의 값을 넣거나 코드를 압축할 수 있다. (패키지 다운로드 필요) 환경 변수에 따라 (개발용) 문자열을 붙인다던지, 운영 환경에서 공백을 모두 제거하고 불필요한 주석을 제거한다던지, 이런 기능을 가지고 있다.
- CleanWebpackPlugin : 빌드 이전 결과물을 제거하는 플러그인. (패키지 다운로드 필요)
- MiniCssExtractPlugin : 스타일시트가 점점 많아지면 하나의 자바스크립트 결과물로 만드는 것이 부담일 수 있다. 번들 결과에서 스타일시트 코드만 뽑아서 별도의 CSS 파일로 만들어 역할에 따라 파일을 분리하는 것이 좋다. 큰 파일 하나를 내려받는 것보다 여러 개의 작은 파일을 동시에 다운로드하는 것이 더 빠르기 때문. (패키지 다운로드 필요)

<br>

## 📘 PORT, DNS

### PORT

한번에 둘 이상 연결해야 하는 경우 (예 - PC로 게임도 하고, 화상통화도 하고, 웹 브라우저 요청도 하고 있을 때) 클라이언트 PC가 여러 개의 서버랑 통신해야 한다. 내 IP로 패킷들이 날아오는데, 게임에서 필요한 패킷인지 화상통화에서 필요한 패킷인지 웹 브라우저의 응답 결과로 온 패킷인지 알 수가 없다. 보낼 때도 마찬가지.

이걸 구분하기 위해 TCP, UDP에 출발지 PORT, 목적지 PORT 정보가 담겨 있다.

같은 IP 내에서 프로세스를 구분하는 게 PORT의 역할

- 0 ~ 65535 할당 가능
- 0 ~ 1023 : 잘 알려진 포트. 사용하지 않는 것이 좋음
    - FTP - 20, 21
    - TELNET - 23
    - HTTP - 80
    - HTTPS - 443

### DNS (Domain Name System)

IP는 기억하기 어렵고, 변경될 수 있다. 

DNS 서버에 도메인을 등록해서 전화번호부처럼 쓸 수 있다.

<br>

## 📘 모자스 6장

## 6장. 데이터 타입

- undefined 타입은 'var 키워드로 선언된 변수에 암묵적으로 할당되는 값' 이었다.
- 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수로 처리한다. 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올 수 있다. 다른 언어에서는 안 그러는구나..

    ```jsx
    console.log(1 === 1.0); // true
    ```

### 템플릿 리터럴

- 백틱을 사용한 문자열 표기법
- 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리 기능을 제공
    - 표현식 삽입은 `${}` 이거! 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.
- 런타임에 일반 문자열로 변환되어 처리

### undefined

- 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화한다. (사실 대부분 비어 있지 않고 garbage value가 들어 있다. 아무튼 초기화한다.)
- undefined는 개발자가 의도적으로 할당하기 위한 값이 아니라, 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값이다.
- 따라서 undefined를 개발자가 의도적으로 변수에 할당한다면 undefined의 본래 취지와 어긋날뿐더러 혼란을 줄 수 있으므로 권장하지 않는다. 대신 null을 사용하자.

### 선언(declaration) vs 정의(definition)

- ECMAScript 사양에서 변수는 '선언'한다, 함수는 '정의'한다 라고 표현하고 있다.
- 자바스크립트의 경우 변수를 선언하면 암묵적으로 정의가 이뤄지기 때문에 선언과 정의의 구분이 모호하다.
- 다른 언어에서는 선언과 정의를 엄격하게 구분해서 사용한다.
    - 선언 : 컴파일러에게 식별자의 존재만 알리는 것
    - 정의 : 실제로 컴파일러가 변수를 생성해서 식별자와 메모리 주소가 연결된 상태

### Symbol 타입

- ES6에서 추가된 7번째 원시 타입
- 변경 불가능하고, 다른 값과 중복되지 않는 유일무이한 값
- 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용
- 리터럴을 통한 생성이 불가능함. Symbol 함수 호출해서 생성해야 함
- 생성된 심벌 값은 외부에 노출되지 않으며, 다른 값과 절대 중복되지 않음

## 🥕 회고

- 왠지 집중이 잘 안 됐던 하루! 팀 미션 할 때는 졸리다고 자고 오거나 이런 게 없었는데 역시 혼자 공부하다보니까 졸리면 자고.. 집중 안 되면 딴짓하고.. 흐음
- Webpack에 대해 공부했는데 아직 알쏭달쏭하다. 하나로 다 합쳤다가 너무 크면 코드 스플리팅을 한다고 해서, 아니? 다시 나눌거면 뭐하러 합치는 거야? 라고 생각했다. 홍태의한테 물어봤는데 웹팩이 의존성 관리도 해주고 바벨같은 것도 해주고 뭐 그렇다고 한다. 단순히 코드를 합치는 것 외에 부가적인 기능이 있는 듯.. 웹팩 등장 이전에는 어땠고 웹팩의 역할이 뭔지 더 공부해봐야겠다.
- 이슈트래커 플젝 하면서 맨날 늦게 잤더니 그게 습관이 돼서 계속 늦게 자고 10시에 일어나자마자 책상 앞에 앉고 이러고 있다. 원래는 아주 일찍 일어나진 않았어도 9시 20분에는 일어나서 씻고 책상 앞에 앉았었는데.. 조금 일찍 자고 일찍 일어나보자.

<br>
<br>
