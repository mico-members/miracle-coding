### Answer To Interviewer

<!-- - [루카스 FE 질문](./answerLucas.md)
- [카톡 1](https://hoiheart.medium.com/%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%EC%A7%81%EA%B5%B0-%EB%A9%B4%EC%A0%91-%EA%B2%BD%ED%97%98-%EA%B3%B5%EC%9C%A0-77acd90b50f0)
- [카톡 2](https://medium.com/@jimkimau/%EC%9D%B4%EB%B2%88-%EA%B8%B0%EC%88%A0-%EB%A9%B4%EC%A0%91-%EC%A4%91-%EA%B8%B0%EC%96%B5%EB%82%98%EB%8A%94-%EC%A7%88%EB%AC%B8%EA%B3%BC-%EB%8B%B5%EB%B3%80%EB%93%A4-712daa9a2dc)
- [북마크 1](https://velog.io/@chris/front-end-interview-handbook-html)
- [북마크 2](https://www.notion.so/521944d4483c4b3cb25b6c29f9835a44) -->
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
    - 실행컨텍스트 생성, 정확히는 렉시컬 환경 구성 과정에서 변수정보를 만들때 호이스팅이 일어난다
- [x] 실행컨텍스트 
  - 실행컨텍스트란, 실행 가능한 자바스크립트 코드블록이 실행되는 환경
    - 전역코드, 함수안의 코드, 그리고 eval()함수로 실행되는 코드
  - 실행컨텍스트는 함수의 스코프 내에서 필요한 정보(렉시컬 환경)를 담고 있다
    - 변수객체(변수, 매개변수parameter, 인수정보arguments, 함수선언의 정보를 담는 객체), 유효범위(스코프), this
  - 실행컨텍스트 스택엔 먼저 전역실행컨텍스트가 쌓이며, 이 실행에서 새로운 함수호출이 발생하면 새로운 실행컨텍스트가 만들어지고 실행되며, 종료되면 반환된다.
- [x] REST API란
  - Representational State Transfer : 자원의 표현에 의한 상태 전달
  - Application Programming Interface : 운영체제나 프로그래밍언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스 
  - URL을 통해 자원을 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD를 적용하는 API
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
- [x] 동기비동기블락논블락 [참고](http://roach-devlog.com/posts/16)
  - Block : 호출된 함수가 자신이 할 일을 모두 마칠 때까지 제어권을 계속 가지고서 호출한 함수에게 바로 돌려주지 않는다
  - Non-block : 호출된 함수가 자신이 할 일을 채 마치지 않았더라도 바로 제어권을 건네주어(return) 호출한 함수가 다른 일을 진행할 수 있도록 해준다
  - synchronous : 호출된 함수의 수행 결과 및 종료를 호출한 함수가(호출된 함수뿐 아니라 호출한 함수도 함께) 신경 쓴다 ~ 입금
  - asynchronous : 호출된 함수의 수행 결과 및 종료를 호출된 함수 혼자 직접 신경 쓰고 처리한다 ~ 입금결과안내
- [x] 생성자함수 동작방식원리
  - new 생성자(...)를 써서 함수를 실행했을 때
    - 빈 객체를 만들어 this에 할당
    - 함수본문실행(프로퍼티 할당)
    - this반환
  - 모든 함수는 생성자 함수가 될 수 있다!
- [x] fetch와 axios 차이
  - fetch는 브라우저에서 사용가능, axios는 설치해야함
    - 거꾸로, 브라우저가 아닌 환경에서는 fetch 사용 불가
  - axios에 비해, fetch는 지원하는 브라우저가 더 적고, polyfill을 지원한다
  - axios에 비해, fetch는 추가적으로 JSON데이터를 변환해줘야한다
- [ ] Hook의 동작원리 [참고링크](https://velog.io/@gwak2837/React-Hooks%EC%9D%98-%EC%9D%B4%ED%95%B4)
  - useState
  ```JS
  function useState(initialValue) {
    var _val = initialValue // _val은 useState에 의해 만들어진 지역 변수입니다.
    function state() {
      // state는 내부 함수이자 클로저입니다.
      return _val // state()는 부모 함수에 정의된 _val을 참조합니다.
    }
    function setState(newVal) {
      // 마찬가지
      _val = newVal // _val를 노출하지 않고 _val를 변경합니다.
    }
    return [state, setState] // 외부에서 사용하기 위해 함수들을 노출
  }
  // state를 변수로 하려면
  const MyReact = (function() {
    let _val // 모듈 스코프 안에 state를 잡아놓습니다.
    return {
      render(Component) {
        const Comp = Component()
        Comp.render()
        return Comp
      },
      useState(initialValue) {
        _val = _val || initialValue // 매 실행마다 새로 할당됩니다.
        function setState(newVal) {
          _val = newVal
        }
        return [_val, setState]
      },
    }
  })()
  const [count, setCount] = MyReact.useState(0)
  ```
  - useEffect
- [ ] 브라우저 최적화
  - 캐싱(css,js리소스요청), js의 스플릿청크(웹팩 / 나눠서 번들링), Gzip(압축해서 보내기, 서버쪽에서 처리)
- [ ] 자바스크립트 디자인패턴의 종류 및 설명?????
- [ ] css: flex라는 것은 무엇인가
- [ ] http & 비연결성? / stateless
- [ ] React의 불변객체(immutable) 면접관에게 설명하기

# 0613 quiz - 코드스쿼드 내부 쪽지시험

### Promise 패턴을 활용한 예시를 들어보고 동작원리를 설명해보세요
```
const example = new Promise((resolve, reject)=> setTimeout(()=>resolve("성공"), 1000))      
example.then((response)=>console.log(response)).catch(console.log("탈락!")) 
```
- Promise는 비동기작업의 결과를 기다린 후 resolve()가 된다면 then으로, reject()가 된다면 catch로 보내줍니다  

### 이벤트 위임방식의 장점은 무엇인가요?
- 일일이 모든 요소에 이벤트를 걸 필요가 없어 메모리가 절약되며, 요소가 추가 혹은 제거가 될때 이벤트를 같이 걸거나 풀 필요가 없어집니다

### prototype 을 이용해서 어떻게 상속을 구현할 수 있나요?
```
function Person() {
  this.sleep = "쿨쿨";
  this.eat = "냠냠";
  this.play = "야호";
}

Person.prototype.live = function () {
  return this.sleep + this.eat + this.play;
};

function Developer() {
  Person.call(this);
  this.code = "으악";
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.live = function () {
  return this.sleep + this.eat + this.code;
};

console.log(new Developer().live());
```

### promise패턴은 어떤 장점이 있나요?
- 콜백의 콜백의 콜백의... 콜백으로 이어지는 패턴 대신 .then 체이닝으로 표현 가능하며, 비동기 처리시점을 좀 더 명확히 표현할 수 있다

### 고차함수는 무엇이고 어떻게 활용했는지 설명해보세요.
- 함수를 인자로 받는 함수
`const delay = (func, delayedTime) => setTimeout(func, delayedTime)
delay(()=>console.log("1초지남"),1000)`

### 웹팩에서 loader와 plugin은 각각 무슨 역할을 하나요?
- 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할
- 로더 : 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
  - 예시 : babel-loader, ts-loader, css-loader, sass-loader
- 플러그인 : 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
  - 예시 : html-webpack-plugin, progress-plugin
### 좌우로 움직이는 무한 슬라이딩 UI를 만들고 싶습니다. 어떻게 구현하는게 좋을까요?
화면에는 1개의 요소만 보여진다는 가정하에 설명드리겠습니다
Item : 화면에 보여질 대상
Container: 화면에 1개의 Item만 보여주기위해 overflow:hidden의 스타일을 가짐

Item은 좌, 중, 우 3개가 있고, container는 가운데 Item만 보여주기위해 적절히 absolute, left로 좌표가 지정되어있습니다.
Item은 순서대로 1번, 2번, 3번이라고 가정하고,
슬라이딩 애니메이션은 Item의 스타일을 transition:200ms로 지정했다고 가정하겠습니다

왼쪽으로 슬라이딩 할 때
1. translate:transformX()로 Item의 width만큼 이동
2. transition이 끝날 때에 맞춰, 즉 200ms후에 Item 1번이 정가운데 위치하므로, Item의 내용을 0번, 1번, 2번으로 바꿔줍니다.
3. 2와 동시에, translate:transformX(0)으로 이동값을 초기화 시켜줍니다.

즉 Item 1 [ Item 2 ] Item 3  
-> [ Item 1 ] Item 2 Item 3 
-> [ Item 0 ] Item 1 Item 2 // (동시에) // Item 0 [ Item 1 ] Item 2 와 같은 흐름이 됩니다.

오른쪽으로 슬라이딩 할 때는 transformX()를 음의 값으로, Item123에서 Item234로 바꿔준 채로 왼쪽으로 슬라이딩하듯이 진행하면 됩니다

### 개발경험에서 캐시를 활용한 구현사례가 있으면 설명해보세요.
없습니다.
API를 요청할 때에 캐시저장소에 이미 똑같은 정보가 있다면, 요청 대신에 캐시저장소의 데이터를 가져오는 방식으로 활용할 수 있고, 이는 로그인이나 검색기록따위에도 적용할 수 있습니다

### Virtual DOM은 무엇인가요?
기존의 브라우저는 HTML을 파싱해서 DOM트리를 만들어내고, 이를 스타일 규칙과 합쳐 렌더 트리를 만들어 화면에 보여줬습니다.
이상의 방식에서는 DOM트리가 수정될 때마다 렌더트리가 통째로 바뀌면서 불필요한 렌더링이 발생한다는 단점이 있습니다.
Virtual DOM, 즉 가상 DOM에서는 화면에 변화가 있을 때 마다 DOM트리를 통째로 수정하는 게 아니라 변경사항이 모두 반영된 가상 돔을 만들어 한 번만 렌더트리를 만들고, 이는 렌더링이 한 번만 발생하게 만듭니다.

### 리액트에서 list태그에 key 값을 추가해야 하는 경우는 왜 그런가요?
리액트가 Virtual DOM을 만들 때 두 list를 비교하고, 차이점이 있으면 변경을 생성합니다.
이때 자식요소에게 key값이 없다면, 1개의 요소만 변했더라도 리스트 전체를 바꾸는 낭비가 발생하고, 이 과정을 위해, 즉 어떤 요소가 추가,변경,삭제됐는지 구별하기위해 key값을 지정해줍니다.

### 리액트에서 서버와 통신하는 과정을 어떻게 구현할 수 있는지 설명해보세요.
대표적으로 fetch나 axios를 이용하는 방법이 있습니다.
fetch(url, header)로 서버와 통신하고,
.then(response => response.json())으로 서버가 준 응답을 해석합니다.
.then(json => somethingAwesomeDataUsing(json))으로 해석된 데이터를 활용합니다.
상기 방식은 useEffect를 통해 렌더링이나 상태의 변화에 따라 호출할 수도 있고, 간단하게 이벤트를 통해 호출할 수도 있습니다

### useReducer를 활용한 상태관리 흐름에 대해서 이야기해보세요.
참고 : (윤지수 교수님의 useReducer실습) https://codesandbox.io/s/magical-galois-rl36m?file=/src/App.js

먼저 우리가 관리해줄 상태 state와, 이 상태를 관리해줄 메서드의 모음인 reducer를 선언합니다
const [state, dispatch] = useReducer(reducer, initialState) 같은 식으로 둘을 묶어주고, 우리는 state를 관측하며 상태를 활용할 수도, dispatch를 통해서 상태를 바꿔줄 수도 있습니다
reducer에는 호출할 때 사용할 메서드명?을 switch case문의 case로, 상태를 변경할 로직을 해당 case에 return 해줍니다

만약 우리가 상태값을 증가시켜주고 싶다면,
dispatch("증가")로 증가하는 로직을 호출해주고,
reducer에서는 "증가"와 같은 케이스를 찾아 해당 로직을 진행합니다.
결과적으로 reducer의 "증가" 로직이 state를 편집하고 우리가 원하는 변화가 일어나게 됩니다

### 리액트 개발과정에서 활용하는 디버깅 방법을 설명해주세요
console.log....

크롬의 개발자도구의 sources탭에서 해당 스크립트를 찾아 breakpoint를 거는 방식으로 디버깅합니다.

### 리액트 클래스 컴포넌트와 함수형 컴포넌트는 어떤 차이점이 있나요?
- 클래스 컴포넌트는 class고 함수형 컴포넌트는 함수입니다....
- 클래스 컴포넌트는 상태와 생명주기, state와 life cycle기능을 직접 사용 가능하고, render()함수를 꼭 선언해주어야 한다.
- 함수형 컴포넌트는 state와 life cycle기능을 hook을 통해 사용해야하며, render()대신 return을 통해 렌더링하고, 메모리자원을 덜 사용한다
- 클래스 컴포넌트에서의 생명주기 : 마운트 되려할 때(componentWillMount), 마운트 되고 나서(componentDidMount), 업데이트 되었을 때(componentDidUpdate), 언마운트(componentWillUnmount) 
  - 마운트 : 상태 저장-> WillMount -> render -> DidMount
  - 업데이트 : ~~WillUpdate~~ -> render -> DidUpdate
- 함수형 컴포넌트에서는 이를 useEffect 훅으로 대체
  - 렌더링시 (DidMount) 한번, 참조배열에 변화에따라 반복(DidUpdate), return으로 청소(WillUnmount)

### Big-O Notation 의 시간복잡도 측정방법에 대해서 설명해보세요.
길이가 n인 배열이 있다.
배열의 길이가 10일 때는 배열 전체를 10번 순회하든(10 * 10) 이중 for문으로 두 번 선회하든 (10 ^ 2) 큰 차이가 없다

하지만 배열의 길이가 점점 커질수록 n^2에 비하면 n * 1/2든 n * 10이든 별 차이가 없게 된다
그러므로 n^2 => O(n^2) // 12873*n + 128937 => O(n) // 1/2\*n - 5 => O(n) 같이 표기하는 방식을 Big-O Notation이라고 한다
Big-O Notation의 시간복잡도 측정방법은 다른 모든 걸 제쳐두고 오직 n의 차수에만 비례한다고 생각하면 된다.

### hash map 또는 hash table 자료구조의 특징을 한가지 말해보세요
참고 : https://lucas.codesquad.kr/main/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-%EC%BD%94%EC%BD%94%EC%95%84-JS/2%EC%A3%BC%EC%B0%A8(%EC%9B%94)-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0(%ED%95%B4%EC%8B%9C)/%ED%95%B4%EC%8B%9C%EB%A7%B5 , https://moonong.tistory.com/5

hash map

- key와 value를 하나의 쌍으로 저장되는 구조이며, hashing을 사용하기 때문에 많은 양의 데이터를 검색하는데 있어 뛰어난 성능을 보인다.
- 저장되는 key와 value는 null 값을 허용한다. 단, key는 중복 불가하다.
- key, value의 쌍으로 관리하므로, Iteration 객체를 사용하지 않고 해당 key에서 데이터의 값을 바로 추출할 수 있다.

### get 과 post는 어떤 차이점이 있나요?
GET은 보통 데이터를 얻는 데에 쓰이며, header에 body를 넣는 것을 허락하지 않는다.
POST는 보통 데이터를 주는 데에 쓰인다.

### 크로스도메인 관련해서 cors 에 대해서 설명해보세요.
보안 상의 이유(XSS따위의)로 브라우저는 같은 출처(도메인)의 요청만 허락합니다
다른 출처의 요청에 응답하면서도, 보안은 지키기위해? 요청헤더의 origin으로 도메인을 보내주고, 서버에서는 응답헤더로 Access-Control-Allow-Origin으로 요청이 허락된 도메인의 정보를 보내줍니다. 이 이외의 도메인은 cross-site방식으로 리소스에 접근할 수 없습니다.
- SOP(동일출처정책) - XSS공격 방지
- CORS(교차출처자원공유) - SOP의 제약을 넘어 다른 도메인의 자원을 사용할 수 있게 해줌
- 브라우저는 Access-Control-Allow-Origin 가 일치하면 응답을 받아온다
- 해결방법
  - 서버쪽에서 Access-Control-Allow-Origin을 설정
  - 브라우저가 에러를 일으킨다는 점을 이용해 서버에서 API를 호출, 이를 수행할 중개서버(프록시) 생성 

### 쿠키는 무엇이고 어떻게 활용할 수 있나요?

출처 : https://ko.wikipedia.org/wiki/HTTP_%EC%BF%A0%ED%82%A4

쿠키(영어: cookie)란 하이퍼 텍스트의 기록서(HTTP)의 일종으로서 인터넷 사용자가 어떠한 웹사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 일컫는다.

구글에서는 사용자의 선호 언어와 광고...를 위해 쿠키를 수집한다
보통 로그인 기록이 있다면 로그인을 유지하거나, 회원가입없이 장바구니를 유지하거나, 팝업창의 "오늘은 더이상 보지 않기"따위의 기능을 활용하는데에 쓰인다

캐시와는 다르다!

# FE개발자에게 하고싶은 질문이란... - 코드스쿼드 루카스 내부 면접대비질문모음
## [루카스](https://lucas.codesquad.kr/masters-2021/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2021/-%ED%95%99%EC%8A%B5%EC%9E%90%EB%A3%8C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/fe%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%97%90%EA%B2%8C-%ED%95%98%EA%B3%A0%EC%8B%B6%EC%9D%80-%EC%A7%88%EB%AC%B8%EC%9D%B4%EB%9E%80..), [참고 아티클](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/2_Object.create.html)

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
