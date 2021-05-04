import React, { useState } from "react";
import ReactDOM from "react-dom";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link, useHistory } from "react-router-dom";
// ACTIONS
import loggingInAction from "../actions/loggingInAction";
//REDUX
import { useDispatch, useSelector } from "react-redux";
// redux form
import { Field, reduxForm, reset } from "redux-form";
// route user
import RouteUser from "./Routing/RouteUser";
const renderInput = ({ input, meta }) => {
  return (
    <>
      <FormGroup>
        <FormField
          type={input.name}
          className="form__field"
          placeholder="Name"
          id="name"
          {...input}
        />
        <label className="form__label">
          {input.name === "password" ? "كلمة السر" : "الاسم"}
        </label>
      </FormGroup>
      <div>{renderError(meta)}</div>
    </>
  );
};
const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <span>{error}</span>;
  }
};
const Login = (props) => {
  const history = useHistory();
  const { userStatus } = useSelector((state) => state.userStatus);
  const { openLogin } = useSelector((state) => state.Popup);
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(loggingInAction(values));
  };

  const exitHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: "OPEN_LOGIN", payload: !openLogin });
    dispatch(reset("login"));
  };
  return ReactDOM.createPortal(
    <StyledLogin show={openLogin} onClick={exitHandler}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={props.handleSubmit(submitHandler)}
      >
        <h2>تسجيل الدخول</h2>
        <Field name="username" component={renderInput} />
        <Field name="password" component={renderInput} />
        <RouteUser reset={reset} />
        <Buttons>
          <ButtonPrimary type="submit">الدخول</ButtonPrimary>
          <ButtonCanel type="button" onClick={exitHandler}>
            الخروج
          </ButtonCanel>
        </Buttons>
      </form>
    </StyledLogin>,

    document.getElementById("portal")
  );
};
const StyledLogin = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: ${(props) => (props.show ? "1" : "0")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  transition: all 0.3s ease;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(1rem);
  background: rgb(0, 0, 0, 0.6);
  form {
    border: 4px solid white;

    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 4rem;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.5s ease;
    transform: ${(props) =>
      props.show
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};

    box-shadow: 0 0 10px black;
    background: white;
    border-radius: 1rem;
    h2 {
      font-size: 2rem;
      padding: 2rem 0;
    }
    @media (max-width: 768px) {
      width: 95%;
    }
  }
`;
const FormField = styled(motion.input)`
  width: 180%;
  height: 100%;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
const FormGroup = styled(motion.div)`
  width: 100%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }
`;
const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ButtonPrimary = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 2rem 0;
  background: rgb(17, 106, 196);
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: #ddd;
  color: black;
  margin-right: 1rem;
`;
const validate = (formValues) => {
  console.log("asd");
  console.log(formValues);
  let error = {};
  if (!formValues.username) {
    error.username = "يجب ادخال الرقم الخاص بك";
  }
  if (!formValues.password) {
    error.password = "يجب ادخال كلمة السر";
  }
  return error;
};
export default reduxForm({
  form: "login",
  validate,
})(Login);
