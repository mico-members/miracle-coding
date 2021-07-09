import React from "react";
import { Router, Route, Link } from "./Router";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Link to="/1">
          <Foo>메인페이지</Foo>
        </Link>
      </Route>
      <Route path="/1">
        <Link to="/2">
          <Foo>1번페이지</Foo>
        </Link>
      </Route>
      <Route path="/2">
        <Link to="/">
          <Foo>2번페이지</Foo>
        </Link>
      </Route>
    </Router>
  );
};

const Foo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;

export default App;
