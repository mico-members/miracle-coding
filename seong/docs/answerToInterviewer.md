### Answer To Interviewer

- [루카스 FE 질문](./answerLucas.md)
- [카톡 1](https://hoiheart.medium.com/%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%EC%A7%81%EA%B5%B0-%EB%A9%B4%EC%A0%91-%EA%B2%BD%ED%97%98-%EA%B3%B5%EC%9C%A0-77acd90b50f0)
- [카톡 2](https://medium.com/@jimkimau/%EC%9D%B4%EB%B2%88-%EA%B8%B0%EC%88%A0-%EB%A9%B4%EC%A0%91-%EC%A4%91-%EA%B8%B0%EC%96%B5%EB%82%98%EB%8A%94-%EC%A7%88%EB%AC%B8%EA%B3%BC-%EB%8B%B5%EB%B3%80%EB%93%A4-712daa9a2dc)
- [북마크 1](https://velog.io/@chris/front-end-interview-handbook-html)
- [북마크 2](https://www.notion.so/521944d4483c4b3cb25b6c29f9835a44)
- [X] 호이스팅
  - https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
    - var 변수/함수의 선언만 위로 끌어 올려지며, 할당은 끌어 올려지지 않는다.
    ```js
    var foo;  // 끌올
    console.log(foo) // undefined
    foo=3
    ```
    - let/const 변수 선언과 함수표현식에서는 호이스팅이 발생하지 않는다.
      - 정확히는 호이스팅은 일어나지만, var에서는 undefined로 초기값을 할당하는 반면에 let과 const는 할당하지 않는다
- [x] 클로저 [answerLucas](./answerLucas.md)
- [x] 렉시컬스코프 스코프체인 [answerLucas](./answerLucas.md)
- [x] cors에러와 sop, 프록시
  - SOP(동일출처정책) - XSS공격 방지
  - CORS(교차출처자원공유) - SOP의 제약을 넘어 다른 도메인의 자원을 사용할 수 있게 해줌
  - 브라우저는 Access-Control-Allow-Origin 가 일치하면 응답을 받아온다
  - 해결방법
    - 서버쪽에서 Access-Control-Allow-Origin을 설정
    - 브라우저가 에러를 일으킨다는 점을 이용해 서버에서 API를 호출, 이를 수행할 중개서버(프록시) 생성 
- [x] 실행컨텍스트 
  - 실행컨텍스트란, 실행 가능한 자바스크립트 코드블록이 실행되는 환경
    - 전역코드, 함수안의 코드, 그리고 eval()함수로 실행되는 코드
  - 실행컨텍스트는 함수의 스코프 내에서 필요한 정보(렉시컬 환경)를 담고 있다
    - 변수객체(변수, 매개변수parameter, 인수정보arguments, 함수선언의 정보를 담는 객체), 유효범위(스코프), this
  - 실행컨텍스트 스택엔 먼저 전역실행컨텍스트가 쌓이며, 이 실행에서 새로운 함수호출이 발생하면 새로운 실행컨텍스트가 만들어지고 실행되며, 종료되면 반환된다.
  <!-- - 콜스택이란, 함수의 호출정보가 차곡차곡 쌓여있는 스택...? -->
- [x] prototype / \__proto__ [answerLucas](./answerLucas.md)
- [x] REST API란
  - Representational State Transfer : 자원의 표현에 의한 상태 전달
  - Application Programming Interface : 운영체제나 프로그래밍언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스 
  - URL을 통해 자원을 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD를 적용하는 API
- [x] arrow function 과 일반함수의 차이점 & this 바인딩 원리 [answerLucas](./answerLucas.md)
- [x] event loop, call stack
  - Call Stack에 쌓인 코드가 실행되며, 도중 비동기코드를 만난다면 빼놓는다?
    - webAPI - DOM이벤트, AJAX, setTimeout
  - 비동기코드의 실행결과는 event queue(callback queue)에 쌓인다
  - Call Stack이 비어있다면 그때 event loop에 의해 순서대로 실행된다
- [X] curry 함수란
  - 커링 : 특정 함수에서 정의된 인자의 일부를 넣어서 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것을 의미한다
- [x] pipe : `const pipe = (...fns) => (args) => fns.reduce((acc, fn) => fn(acc), args)`
- [X] 함수형 프로그래밍이란 & 1급객체의 뜻
  - 함수형 프로그래밍 : 함수의 조합으로 작업을 실행함
    - 알고리즘을 숨기려고하고, 선언적으로 표현하면서 목표중심적으로 프로그램을 표현. 전역상태를 사용하지 않음.
    - 목표중심의 실현체는 '함수'이다. 함수를 다양하게 표현해야 하는데 집중.
    - 객체를 사용하지만, 새로운 객체를 생성하는 방식으로 사용.
  - 함수형 프로그래밍의 특징
    - 고차함수 : 함수를 인자로 받거나 반환하는 함수
    - 무상태 : 상태를 가지지 않음
    - 불변성 : 어떤 값의 상태를 변경하지 않는다 (= 사이드이펙트가 없다)
    - 참조투명성 : 함수 외부를 참조하지 않는다
  - 자바스크립트에서도 함수형 프로그래밍이 가능하다. JS는 클로저와 일급객체로서의 함수를 지원하기 때문이다.
  - JS에서 함수는 1급객체이다
    - 변수나 데이터에 할당 할 수 있어야 한다.
    - 객체의 인자로 넘길 수 있어야 한다. 
    - 객체의 리턴값으로 리턴 할수 있어야 한다.
- [X] 타입스크립트의 동작 방식
  - TS 소스 -> TS AST(추상문법트리) -> 타입체크 -> JS 소스
- [X] Garbage Collection
  - 가비지 컬렉터가 도달가능하지 못한 값을 찾아내서(루트에서부터 추적) 삭제
- [x] React 생명주기
  - 클래스 컴포넌트에서의 생명주기 : 마운트 되려할 때(componentWillMount), 마운트 되고 나서(componentDidMount), 업데이트 되었을 때(componentDidUpdate), 언마운트(componentWillUnmount) 
    - 마운트 : 상태 저장-> WillMount -> render -> DidMount
    - 업데이트 : ~~WillUpdate~~ -> render -> DidUpdate
    - 언마운트 : WillUnmount -> 사망
  - 함수형 컴포넌트에서는 이를 useEffect 훅으로 대체
    - 렌더링시 (DidMount) 한번, 참조배열에 변화에따라 반복(DidUpdate), return으로 청소(WillUnmount)


- 자바스크립트 디자인패턴의 종류 및 설명?????
- css: flex라는 것은 무엇인가
- [ ] http & 비연결성? / stateless
- [ ] React의 불변객체(immutable) 면접관에게 설명하기