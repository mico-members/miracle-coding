# [FE개발자에게 하고싶은 질문이란..](https://lucas.codesquad.kr/masters-2021/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2021/-%ED%95%99%EC%8A%B5%EC%9E%90%EB%A3%8C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/fe%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%97%90%EA%B2%8C-%ED%95%98%EA%B3%A0%EC%8B%B6%EC%9D%80-%EC%A7%88%EB%AC%B8%EC%9D%B4%EB%9E%80..)

## [참고](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/2_Object.create.html)

## 브라우저의 렌더링 동작과정을 짧게 설명해보세요.

- HTML, CSS를 다운로드 => DOM, CSSOM 생성 -> 이를 통해 render tree 생성 -> Layout or Reflow : 브라우저의 뷰 포트 안에서 각 노드들의 정확한 위치와 크기를 계산 -> Paint 그리기
- 스크립트는 HTML파싱과정에서 같이 읽는다
  - `<script>` - HTML 파싱이 중단되고, 스크립트를 즉시 가져오고 실행되며, 스크립트 실행 후 HTML 파싱이 다시 시작됩니다.
  - `<script async>` - 이 스크립트는 HTML 파싱과 병렬적으로 가져오며, 가능할 때 즉시 실행됩니다(아마 HTML 파싱이 끝나기 전)
  - `<script defer>` - 이 스크립트는 HTML 파싱과 병렬적으로 가져오지만, 페이지 파싱이 끝나면 실행됩니다. 이 것이 여러개 있는 경우, 각 스크립트는 페이지에 등장한 순서대로 실행됩니다.

## 자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요.

- function 스코프 이용
  - function스코프란?
    - 함수 내에 값을 정의해서 사용하고, 밖에서 값을 직접 접근못하게 숨김 ex)클로저

## closure 와 스코프관계를 설명해보세요.

- 클로저란 내부함수가 외부함수의 지역변수에 접근 할 때, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다. (함수를 반환하는 함수)
  - 이 때 내부함수만을 가리켜 클로저라고 하기도 하며, 클로저가 참조하는 변수를 자유변수라 부른다
- 스코프(유효 범위)란 변수의 접근성과 수명을 의미한다
  - 전역/지역 | 함수/블록 | 렉시컬
  - ES5에서는 함수레벨의 스코프까지 지원, ES6부터 블록 레벨의 스코프를 지원, let const사용가능
  - 렉시컬 스코프 (Static <-> Dynamic, 동적 스코프): 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정
- 클로저는 실행컨텍스트와 관련없는 스코프의 변수를 스코프체인을 통해 사용할수 있게된 형태
- 클로저를 사용하는 이유 : 캡슐화(외부에서 접근 불가)

## ES6의 Class extends 내부 동작원리에 대해서 설명해보세요. [루카스](https://lucas.codesquad.kr/masters-2021/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-FE-%ED%81%B4%EB%9E%98%EC%8A%A4/5%EC%A3%BC%EC%B0%A8-%EA%B2%80%EC%83%89%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1/%EC%88%98%EC%97%85%EC%9E%90%EB%A3%8C-0310-prototypal-Inheritance)

- Class 부모와, Class 자식이 있다고 가정할 때
  - 먼저 자식의 생성자에서 `부모.call(this, ...)`로 부모의 프로퍼티를 가져옵니다.
  - `자식.prototype = Object.prototype(부모.prototype)`으로 부모의 메서드를 가져옵니다
  - ~~`자식.prototype.constructor = 자식`으로 에러 수정~~
  <!-- - Object.create(Vehicle.prototype)과 new Vehicle()의 차이: Object.create는 객체를 만들되 생성자는 실행하지 않는다 -->
- call : 첫번째 인자로 바인딩할 this를, 뒤에 인자들을
- apply : 뒤의 인자들을 배열의 형태로
- bind : call과 같으나 호출하지 않는다

## 객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.

- for in(hasOwnProperty!!), Object.keys(), Object.entries()

## NodeList 타입을, Array에 있는 reduce메서드를 사용하는 방법은?

- `NodeList.prototype.reduce = Array.reduce`

## arrow 함수의 this가 결정되는 방식을 설명해보세요.

- 일반적으로 this는 호출시 동적으로 결정된다(like dynamic scope)
- 하지만 arrow function에서는 선언시 정적으로 결정된다(like lexical scope)

## immutable과 mutable은 무엇이 다른것인가요?

- Mutable한 객체는 생성된 이후에 상태가 변경될 수 있는 객체이고, Immutable한 객체는 생성된 이후에 상태가 변경되지 않는 객체를 말한다.
- 자바스크립트에서 Object와 Array를 제외한 모든 타입은 Immutable한 타입이다.

## undefined와 null의 차이점을 설명하세요.

- undefined은 변수를 선언하고 값을 할당하지 않은 상태, 즉 undefined는 자료형이 없는 상태이다.
- null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. `typeof null // object`

<!-- ### 아래처럼 동작하는 flatten함수를 reduce를 활용해서 만들어보세요.
```js
const arr = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = flatten(arr);
console.log(flattenedArray)  //[1, 2, 3, 4, 5, 6];
``` -->

## 객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요. (객체의 깊이는 1단계만 있다고 가정)

- `const 새로운객체 = {...기존객체}`, `Object.assign()`

<!-- ### Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.

```js
Array.prototype.from = function (a, callback = (el) => el) {
  //iterable????

  return new Array(a.length).map(callback);
};
``` -->

## prototype 의 동작방식에 대해서 설명해보세요. [참고 루카스](https://lucas.codesquad.kr/masters-2021/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-FE-%ED%81%B4%EB%9E%98%EC%8A%A4/2%EC%A3%BC%EC%B0%A8-AIRBNB-%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)

- 자바스크립트에서 모든 객체는 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체를 가진다
  - 이 프로토타입 객체를 가리키는 링크 형태의 숨겨진 프로퍼티가 바로 [[Prototype]] (=== **proto**)
  - 이는 함수객체의 prototype프로퍼티와는 다르다!
- 프로토타입 객체 또한 프로토타입 객체를 가지고, 이 반복을 프로토타입 체인이라 부른다
- 객체의 속성에 접근할 때 해당 객체가 직접적으로 속성을 소유하고 있는지 먼저 체크하고, 그 다음 prototype을 체크하며, 이 반복은 프로토타입체인을 따라 최상위의 Object.prototype에 도달할 때 까지 반복된다.

## 순환되는 캐로셀UI의 구현 원리에 대해서 설명해보세요.

- [퀴즈 답변](./0613quiz.md)

## 비동기의 장점을 설명해보세요.

- 자바스크립트는 싱글쓰레드로 동작하기 때문에 네트워크 처리 따위의 시간이 오래걸리는 작업이 있다면, blocking 되어 다른 코드에 영향을 주는데 비동기 처리를 함으로써 이를 극복할 수 있다

## 클로저로 동작되는 상황을 예시코드로 보여주세요.

```JS
const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}
```

## React의 virtual DOM 은 뭐에요?

- 기존의 브라우저는 HTML을 파싱해서 DOM트리를 만들어내고, 이를 스타일 규칙과 합쳐 렌더 트리를 만들어 화면에 보여줬습니다.
  이상의 방식에서는 DOM트리가 수정될 때마다 렌더트리가 통째로 바뀌면서 불필요한 렌더링이 발생한다는 단점이 있습니다.
  Virtual DOM, 즉 가상 DOM에서는 화면에 변화가 있을 때 마다 DOM트리를 통째로 수정하는 게 아니라 변경사항이 모두 반영된 가상 돔을 비교해 한 번만 렌더트리를 만들고, 이는 렌더링이 한 번만 발생하게 만듭니다.

## SSR은 무엇인가요? 어떻게 구현하죠?

- 서버에서 페이지를 그려 클라이언트로 보내는 방식
- 서버에서 미리 HTML과, 스크립트와, 그에 따라 요청되는 데이터들을 미리 다 처리하여 페이지를 만든 후 만들어진 HTML페이지를 유저에게 보내준다 [참고](https://donggyu9410.medium.com/%EA%B0%80%EC%9E%A5-%EC%89%AC%EC%9A%B4-%EB%B0%A9%EB%B2%95%EC%9C%BC%EB%A1%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-966702610664)

## ~~React의 렌더링 방식은 무엇인가요?~~

- 가상 DOM을 이용함?

## React의 초기화면 느린 부분은 어떻게 해결해야해요?

- SSR활용
  - 빈 HTML 페이지를 받아 브라우저에서 그리는 클라이언트 사이드 렌더링과 다르게 서버에서 미리 그려서 브라우저로 보내주기 때문에 페이지를 그리는 시간을 단축

프로그래밍 요구사항을 받았을때, 구현하기 전까지 어떤 과정을 거치시나요?

웹사이트의 초기 로딩속도를 더 빠르게 하기 위해서 무엇을 해야 할까요?

최근 가장 깊게 공부하고 있는 부분은 무엇인가요? 그 부분에 대해서 간단하게 설명해보세요.

본인이 즐겨하는 디버깅 방법을 설명해보세요.

bind 가 필요한 상황을 간단한 코드로 보여주세요.

CommonJS 스펙에 대해 설명해보세요.

node의 middleware의 동작방식을 설명해보세요.

본인이 생각하는 좋은 객체지향프로그래밍에 대해서 설명해보세요.

<!-- ### Object.create의 역할은 무엇인가요?
- 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만듭니다 -->

<!-- ### 본인이 경험한 OOP관점에서의 객체분리를 설명하고, 느낀 장점을 말해보세요. -->

<!-- ### == 보다, === 를 써야할때는? - 의도한것이 아니라면 전부 -->

<!-- ### DFS, BFS를 통한 트리탐색방법 중 본인이 경험(사용)했던 방식은 무엇이고, 동작원리를 짧게 설명해보세요. -->

<!-- ### Event 객체에 대해서 설명해보세요.
- 사용자의 액션, 혹은 API가 생성한다.
-  -->
