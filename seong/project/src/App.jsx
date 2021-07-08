import React, { useState, useEffect } from "react";
import { Router, Route, Link } from "./Router";
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState(0);
  const foo = () => {
    window.history.pushState({ page: count }, "", `${count}`);
    setCount((count) => ++count);
  };

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      console.log(e);
      console.log(window.history);
    });
    // window.onpopstate = (e) => console.log(e);
    console.log(window.history);
    console.log("useEffect!!!");
  }, [window.history.length]);

  return (
    <Router>
      <Foo onClick={foo}>asjdhskjahdkjsad</Foo>
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
