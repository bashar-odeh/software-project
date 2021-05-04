import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import AsyncSelect from "react-select/async";
const renderError = ({ meta: { touched, error } = {} }) =>
  touched && error ? <span>{error}</span> : false;

const filterColors = () => {
  return [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
};
const renderAsync = ({ input, meta }) => {
  const loadOptions = (inputValues, callback) => {
    callback(filterColors(inputValues));
  };
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      {...input}
      styles={customStyles}
    />
  );
};
const renderInput = (props) => {
  const { input, meta, type } = props;
  return (
    <>
      <FormGroup>
        <FormField
          type={type}
          className="form__field"
          placeholder={input.name}
          {...input}
        />
        <label className="form__label">{props["aria-label"]}</label>
      </FormGroup>
      <span>{renderError(meta)}</span>
    </>
  );
};

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="title"
        component={renderInput}
        aria-label="العنوان"
      />{" "}
      <Field
        type="text"
        name="floor_number"
        component={renderInput}
        aria-label="الطابق"
      />{" "}
      <Field
        type="text"
        name="number_of_rooms"
        component={renderInput}
        aria-label="عدد الغرف"
      />{" "}
      <Field
        type="text"
        name="price"
        component={renderInput}
        aria-label="السعر"
      />
      <Field
        type="text"
        name="status"
        component={renderAsync}
        aria-label="الحالة"
      />
      <Field
        type="text"
        name="sub_city_id "
        component={renderAsync}
        aria-label="المدينة الفرعية"
      />
      <Field
        type="text"
        name="description"
        component="textarea"
        placeholder="الوصف"
        style={{
          flex: "1 1 100%",
          height: "20vh",
          marginTop: "1rem",
          padding: "1rem 0.5rem",
        }}
      />
      <button type="submit">Next</button>
    </Form>
  );
};

const Form = styled.form`
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
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 535,
    marginTop: 10,
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
})(WizardFormFirstPage);
