import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import AppartmentCard from "../AppartmentCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Body = ({}) => {
  return (
    <StyledBody>
      <Title>
        <h3>الشقق المتاحة </h3>
      </Title>
      <Container>
        <AppartmentCard />
        <AppartmentCard />
        <AppartmentCard />
        <AppartmentCard />
        <AppartmentCard />
        <AppartmentCard />
        <AppartmentCard />
      </Container>
    </StyledBody>
  );
};
const StyledBody = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
const Container = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  font-size: 1.7rem;
  padding: 1em 0;
`;

export default Body;
