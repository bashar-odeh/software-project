import React from "react";
// components
import Header from "../components/Header";

import Main from "../components/Main";
//style
import styled from "styled-components";

// routing
const HomePage = (z) => {
  return (
    <HomePageStyled>
      <Header />
      <Main />
    </HomePageStyled>
  );
};
const HomePageStyled = styled.div`
  height: auto;
  width: 100%;
`;
export default HomePage;
