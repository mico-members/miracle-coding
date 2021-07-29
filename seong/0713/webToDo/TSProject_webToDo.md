# JS -> TS Coverting Project #1

## Web To Do 
#### [JS Codepen](https://codepen.io/gleamingstar/pen/NWrJGzW?editors=0010)  / [TS Codepen](https://codepen.io/gleamingstar/pen/VwbmVmz)

### Review
- HTML 태그의 목록 : `keyof HTMLElementTagNameMap`
- querySelector는 반환값이 없을 수 있어 optionalchaining을 숨쉬듯이 걸어야한다
  - 선언식의 좌변에는 ?를 걸수가 없어 if(노드) 식으로 안예쁘게 했는데 다른 방법 있는지 찾아볼 것
  - querySelector의 타겟을 HTMLElement나 document로 걸려고 하자 실패 -> `as unknown as HTMLElement`로 치환했다. 안좋은 패턴이니 대안을 찾자
- addEventListner는 두번째인자로 EveentListender type을 받는데, 이 때 `(e:MouseEvent)=>{}` 처럼 특정한 이벤트타입을 받으면 안되고 쌩Event 타입만 허용된다
  - 이 때 keyCode 따위의 속성도 없을 뿐더러, eventTarget의 타입도 as로 재지정해줘야 기존 알고리즘을 유지할 수 있었다
```JavaScript
class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }
```
- 위 코드처럼 클래스의 프로퍼티를 재밌게 선언해야하던데;; 다음 프로젝트때 클래스와 프로퍼티와 타입스크립트를 깊게 살펴볼 것
  - 이거 class field인가? 그냥 interface 대용인가? 
- 작년 10월에 만든 코드라 그런지 구조 자체의 문제도 많았다. AddText메서드가 node를 append할 때도 있고 string만 append할 때도 있다. 리액트때는 다 만든 코드를 변환하는 데도 별 문제가 없었는데 여기선 개고생했다
  - 그냥 이 코드가 더럽게 못짠 코드 아닐까?
  - 그냥 리팩토링 하면 될 것을 억지로 타입선언만 하려고 든 내가 너무 게으른 게 아닐까?
- 코드 귀엽네 append() remove() 난리났다 아주

#### Change Log
![image](https://user-images.githubusercontent.com/70461368/125385197-036dd180-e3d5-11eb-8213-7a08a6efd053.png)
![image](https://user-images.githubusercontent.com/70461368/125385234-15e80b00-e3d5-11eb-93c3-599e4cb5e017.png)
![image](https://user-images.githubusercontent.com/70461368/125385295-3021e900-e3d5-11eb-9f14-74e640cf9de8.png)