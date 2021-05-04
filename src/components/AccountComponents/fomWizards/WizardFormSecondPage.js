import React, { useState } from "react";
import { Fields, Field, reduxForm } from "redux-form";
import styled from "styled-components";

const renderError = ({ meta: { touched, error } = {} }) =>
  touched && error ? <span>{error}</span> : false;

const renderInput = (fields) => {
  const { names, type, ...props } = fields;
  const title = fields[names[0]];
  const pic = fields[names[1]];

  const { onChange, onBlur, value: omitValue, ...inputProps } = pic.input;
  const handleChange = (handler) => ({ target: { files } }) =>
    handler(files.length ? { file: files[0], name: files[0].name } : {});

  return (
    <>
      <InputWrapper>
        <FormGroup>
          <FormField type={type[0]} className="form__field" {...title.input} />
        </FormGroup>
        <FormGroup>
          <FormField
            type={type[1]}
            className="form__field"
            onChange={handleChange(onChange)}
            onBlur={handleChange(onBlur)}
            {...inputProps}
            {...props}
          />
        </FormGroup>
      </InputWrapper>
    </>
  );
};

const WizardFormSecondPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  const [state, setstate] = useState([]);
  const addFeild = () => {
    setstate([
      ...state,
      <Fields
        type={["text", "file"]}
        names={[`title${state.length}`, `pic${state.length}`]}
        component={renderInput}
        aria-label="العنوان"
      />,
    ]);
  };
  return (
    <>
      <button onClick={addFeild}>اضف حقلا جديدا </button>
      <Form onSubmit={handleSubmit}>
        {state}
        <button type="submit">submit</button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormField = styled.input`
  width: 95%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid black;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media (max-width: 310px) {
    width: 140%;
  }
`;
const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: $gray;
  }
`;
const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 200px) {
    flex-wrap: wrap;
  }
`;
const ButtonPrimary = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  margin: 2em 0;
  background: #174bad;
  font-size: 1rem;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.2s;
  span {
    margin-right: 1em;
  }
  @media (max-width: 340px) {
    font-size: 0.8rem;
  }
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: red;
  margin-right: 1rem;
`;
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const validate = (values) => {};
export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardFormSecondPage);
