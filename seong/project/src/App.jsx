import React from "react";
import styled from "styled-components";

const App = () => (
  <>
    <Foo>asjdhskjahdkjsad</Foo>
  </>
);

const Foo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;

export default App;
