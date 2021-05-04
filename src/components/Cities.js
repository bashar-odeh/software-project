import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import nablus from "../images/Love_Nablus.jpeg";
import bet from "../images/ilovebeth.jpg";
import jerusalem from "../images/we_love_rerusalem.jpg";
import ramallah from "../images/we-ramallah.jpg";
const Cities = () => {
  return (
    <StyledCitiies>
      <Title>
        <h2>المدن الفلسطينية</h2>
        <h3> اختر مدينتك المستقبلية </h3>
      </Title>
      <Wrapper>
        <div className="image-container">
          <img src={nablus} alt="" />
        </div>{" "}
        <div className="image-container">
          <img src={nablus} alt="" />
        </div>
        <div className="image-container">
          <img src={jerusalem} alt="" />
        </div>
      </Wrapper>
    </StyledCitiies>
  );
};
const StyledCitiies = styled(motion.div)`
  min-height: 30vh;
  height: 100%;
  padding: 0 2em;
`;
const Title = styled(motion.div)`
  h2,
  h3 {
    text-align: center;
    color: #2b2a2a;
  }
  h3 {
    margin-bottom: 1em;
  }
`;
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  .image-container {
    flex: 1 1 30%;
    overflow: hidden;
    color: white;
    box-shadow: 0 0 7px rgb(0 0 0 /50%);
    border-radius: 10px;
    transition: 0.2s all ease;
    cursor: pointer;
    margin: 0.5em;
    img {
      width: 100%;
      height: 40vh;
      display: block;
    }
    &:hover {
      transform: scale(1.01);
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Cities;
