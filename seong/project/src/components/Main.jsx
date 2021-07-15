import React, { useState } from "react";
// import { Link } from "toy=react-router";
import { Link, Redirect } from "toy-react-router";
import styled from "styled-components";

const Main = () => {
  const [count, setCount] = useState(0);

  console.log(count, "main page rendered");
  return (
    <MainWrapper onClick={() => setCount((count) => ++count)}>
      <Child1Memo />
    </MainWrapper>
  );
};

const Child1 = () => {
  console.log("child1 rendered");

  return (
    <Child1Wrapper>
      <Redirect to="/1" />
      <Child2Memo />
    </Child1Wrapper>
  );
};
const Child1Memo = React.memo(Child1);

const Child2 = () => {
  console.log("child2 rendered");
  return (
    <Child2Wrapper>
      <Link to="/1">main</Link>
    </Child2Wrapper>
  );
};
const Child2Memo = React.memo(Child2);

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;
const Child1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 1px solid blue;
`;
const Child2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 1px solid green;
`;

export default React.memo(Main);
