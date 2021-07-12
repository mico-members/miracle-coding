import React, { useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Page from "./components/Page";
import { Router, Route, Link } from "toy-react-router";

const App = () => {
  return (
    <>
      <Foo />
      <Router>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/1">
          <Link to="/2">
            <Page />
          </Link>
        </Route>
        <Route path="/2">
          <Link to="/">
            <Page />
          </Link>
        </Route>
      </Router>
    </>
  );
};

const Foo = () => {
  const [count, setCount] = useState(0);
  console.log("foo rendered")

  return <FooWrapper onClick={() => setCount((count) => ++count)}>{count}</FooWrapper>;
};

const FooWrapper = styled.div`
  border: 3px solid gray;
  width: 800px;
  height: 100px;
`;

export default App;
