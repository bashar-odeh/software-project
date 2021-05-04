import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const RentSpecs = () => {
  const [priceRange, setPriceRange] = useState([150, 500]);
  const [yearRange, setYearRange] = useState([2005, 2010]);
  const [toggleFitler, setToggleFilter] = useState(false);
  return (
    <WrapperParent>
      <i
        className={`fas fa-filter ${toggleFitler ? "active-i" : ""}`}
        onClick={() => setToggleFilter(!toggleFitler)}
      ></i>
      <StyledFilter className={`${toggleFitler ? "active" : ""}`}>
        <Price>
          <h3>Filter</h3>
        </Price>
        <Form>
          <Wrapper>
            <InputGroup>
              <label htmlFor="drop">المدينة</label>

              <select id="drop" name="drop">
                <option value="tulkarm">Tulkarm</option>
                <option value="tulkarm">Tulkarm</option>
                <option value="tulkarm">Tulkarm</option>
                <option value="tulkarm">Tulkarm</option>
              </select>
            </InputGroup>
            <InputGroup>
              <label htmlFor="pick-up">السعر</label>
              <Slider
                onChange={(e, newValue) => {
                  setYearRange(newValue);
                }}
                min={2000}
                max={2022}
                value={yearRange}
                onChangeCommitted={() => {
                  console.log("x");
                }}
              />
              <ValueSets>
                <span>{yearRange[1]}</span>
                <span>-</span>
                <span>{yearRange[0]}</span>
              </ValueSets>
            </InputGroup>
            <InputGroup>
              <label htmlFor="drop">المساحة</label>
              <Slider
                onChange={(e, newValue) => {
                  setPriceRange(newValue);
                }}
                min={50}
                max={1200}
                value={priceRange}
              />
              <ValueSets>
                {" "}
                <span>{priceRange[1]}</span>
                <span>-</span>
                <span>{priceRange[0]}</span>
              </ValueSets>
            </InputGroup>
          </Wrapper>

          <Buttons>
            <button>ابحث</button>
          </Buttons>
        </Form>
      </StyledFilter>
    </WrapperParent>
  );
};
const WrapperParent = styled.div`
  .active {
    transform: translateX(0);
  }
  .active-i {
    margin-right: 50%;
  }
  i {
    margin-top: 10px;
    transition: 0.5s ease all;
    font-size: 1.3em;
    position: fixed;
  }
`;
const StyledFilter = styled(motion.div)`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  position: fixed;
  top: 10vh;
  right: 0;
  transition: 0.5s all ease;
  transform: translateX(100%);
`;
const Price = styled(motion.div)`
  height: 8vh;
  background: #1d62e0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
`;
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  top: 0;
  div {
    padding-top: 1rem;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  label {
    font-size: 0.8rem;
    color: black;
    font-weight: bold;
    width: 100%;

    padding: 0.5rem 0;
  }
  select,
  input {
    padding: 0.5rem;
    color: gray;
    &:focus {
      outline-color: rgb(16, 106, 196);
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const ValueSets = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  span {
    flex: 0 0 10%;
    width: 5ch;
    background: white;
    font-weight: 600;
    padding: 0.5rem;
    text-align: center;
  }
  span:nth-of-type(2) {
    background: transparent;
  }
`;

const Buttons = styled(motion.div)`
  padding: 1rem;
  margin: 0 auto;
  button {
    padding: 1rem;
    border: none;
    color: white;
    font-weight: bold;
    background: #6390e6;
    font-size: 1.1rem;
    transition: 0.2s all ease-in;

    &:hover {
      background: #1d62e0;
    }
  }
`;
export default RentSpecs;
