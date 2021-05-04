import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./fomWizards/WizardFormFirstPage ";
import WizardFormSecondPage from "./fomWizards/WizardFormSecondPage";

class AddApartment extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  render() {
    const { page } = this.state;
    const onSubmit = (val) => {
      console.log(val);
    };
    return (
      <div style={{ minHeight: "100vh" }}>
        {page === 0 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 1 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

AddApartment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddApartment;
