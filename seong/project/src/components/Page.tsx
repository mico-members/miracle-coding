import React from "react";
import styled from "styled-components";

const Page = () => {
  console.log("page is rendered");
  return <PageWrapper>page</PageWrapper>;
};

const PageWrapper = styled.div`
  border: 2px solid #aaa;
`;

export default Page;
