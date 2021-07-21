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
- [ ] cors에러와 sop, 프록시    
- [x] 실행컨텍스트 
  - 실행컨텍스트란, 실행 가능한 자바스크립트 코드블록이 실행되는 환경
    - 전역코드, 함수안의 코드, 그리고 eval()함수로 실행되는 코드
  - 실행컨텍스트는 함수의 스코프 내에서 필요한 정보를 담고 있다
    - 변수객체(변수, 매개변수parameter, 인수정보arguments, 함수선언의 정보를 담는 객체), 유효범위(스코프), this
  - 실행컨텍스트 스택엔 먼저 전역실행컨텍스트가 쌓이며, 이 실행에서 새로운 함수호출이 발생하면 새로운 실행컨텍스트가 만들어지고 실행되며, 종료되면 반환된다.
  <!-- - 콜스택이란, 함수의 호출정보가 차곡차곡 쌓여있는 스택...? -->
- [x] prototype / \__proto__ [answerLucas](./answerLucas.md)
- [x] REST API란
  - Representational State Transfer : 자원의 표현에 의한 상태 전달
  - Application Programming Interface : 운영체제나 프로그래밍언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스 
  - URL을 통해 자원을 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD를 적용하는 API
- [x] arrow function 과 일반함수의 차이점 & this 바인딩 원리 [answerLucas](./answerLucas.md)
- 자바스크립트 디자인패턴의 종류 및 설명?????
- css: flex라는 것은 무엇인가
- [ ] http & 비연결성? / stateless
- [ ] event loop, call stack 면접관에게 설명하기
- [ ] prototype 간단히 면접관에게 설명하기
- [ ] React의 불변객체(immutable) 면접관에게 설명하기
- [ ] React life cycle 면접관에게 설명하기
- [ ] virtual DOM 렌더링과정 면접관에게 설명하기