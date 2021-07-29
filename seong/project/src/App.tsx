import React, { useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Page from "./components/Page";
import { Router, Route, Link, Switch } from "toy-react-router";

const App = () => {
  return (
    <>
      <Foo />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/1">
            <Link to="/a">
              <Page />
            </Link>
          </Route>
          <Route path="/a" exact>
            <Link to="/">
              <Page />
            </Link>
          </Route>
          <Route path="*">121212</Route>
        </Switch>
      </Router>
    </>
  );
};

const Foo = () => {
  const [count, setCount] = useState(0);
  console.log("foo rendered");

  return <FooWrapper onClick={() => setCount((count) => ++count)}>{count}</FooWrapper>;
};

const FooWrapper = styled.div`
  border: 3px solid gray;
  width: 800px;
  height: 100px;
`;

export default App;
