# toy-react-router
#### [react-router 공식문서](https://reactrouter.com/web/guides/quick-start)
#### [Lucas - Client Routing](https://lucas.codesquad.kr/masters-2021/course/%EB%A7%88%EC%8A%A4%ED%84%B0%EC%A6%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2021/-%ED%95%99%EC%8A%B5%EC%9E%90%EB%A3%8C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/Client-Routing)
#### [Crong's custom router](https://gist.github.com/crongro/7472a27d826d17eb4a3b29e70c54e650)

### 의의
- 이력서에 당당히 올릴 프로젝트 추가
- cra없는 프로젝트 진행을 통한 환경설정 능력 개발
- 라이브러리 배포를 통한 npm에 대한 이해 증진
- 라우터와, 그에 따른 SPA에 대한 이해 심화
- 코드스쿼드 과정에서 쌩깠던 요구사항 as
### 목표
- [ ] 라이브러리 이름 고안
  - 적당히 짧으면서, 특색있으면서, 어감좋으면서, 기억에남으며, 실험중인 라이브러리임을 티내면서, 면접관분들의 감성에 맞으며, 앞으로 내가 계속 쓸 때도 어색함이 없는 적절한 네이밍 고안할 것
- [X] 팀 규모 : 1명
- [X] CRA 없이 웹팩,바벨,타입스크립트 환경설정
- [ ] 필수 기능
  - url에 따른 선택적 렌더링을 위한 route 구현
  - switch 컴포넌트 구현
  - history.pushState를 통한 뒤로가기 구현
  - link 컴포넌트 구현
- [ ] 추가기능
  - switch와 no match 처리, 404
  - 중첩 route
  - exact 기능
  - redirect 기능
  - window.location 대체할 [useParams?](https://reactrouter.com/web/example/url-params) 따위의 Hooks 개발

### 계획
- ~~CRA없이 리액트 환경 만들기~~
- ~~버튼 이벤트 따위로 pushState, 뒤로가기 테스트~~
- ~~popstate 이벤트 테스트~~
- `<Route />` 컴포넌트 구현
- `<Switch />` 컴포넌트 구현
- `<Link />` 컴포넌트 구현
- 저장소 생성
- README.md 수정
- 배포
- 재사용성 및 사용자 편의성 따위의 개선, 리팩토링 반복
- 추가 기능 추가
- 시간이된다면 타입스크립트버전도 배포
  - 이전 DD의 배포 살펴볼 것