# JS -> TS Coverting Project #2

## SmartDropDown
#### [JS Codepen](https://codepen.io/gleamingstar/pen/ExyqjqO)  / [TS Codepen](https://codepen.io/gleamingstar/pen/OJmbqdd)

### Review
- 함수선언식이나 표현식으로 class를 구현했을 때엔 new 로 인스턴스를 만들 수 없으며, 구문시그니쳐(construct signatures)로 이를 극복할 수 있는데, 구문시그니처를 활용하려면 class를 이용해 implements를 해야된다 ㅋㅋㅋㅋㅋㅋㅋ 이게 도대체 뭐하자는
```TS
interface IConstructor {
  new (): ISmartDropDown;
}

interface ISmartDropDown {
  timer: TimerHandler;
  isDelayed: boolean;
  box: { [key: string]: number };
  init: () => void;
}

function createSmartDropDown(csrt: IConstructor): ISmartDropDown {
  return new csrt();
}

const SmartDropDown = function (this: any) {
  this.timer;
  this.isDelayed = true;
  this.box = {};
  this.init();
};
--------------------------------------
const test = createSmartDropDown(SmartDropDown() as any);
```
- 발악을 했는데도 결국 this: any와 as any가 없으면 에러가 사라지지 않는다
- 만약 당신이 타입스크립트를 이용한다면 무조건 ES6 Class를 사용해라
- 같은 폴더안에 두 파일이 서로 같은 이름의 전역변수를 사용한다면 ts는 에러를 발생한다

#### Change Log
![image](https://user-images.githubusercontent.com/70461368/125419390-437fc352-e068-413f-aaab-0f4b6739921f.png)
