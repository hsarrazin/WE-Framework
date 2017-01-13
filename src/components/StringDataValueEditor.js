import React, { Component, PropTypes } from "react";

export default class StringDataValueEditor extends Component {

  handleValueChange(event) {
    this.props.onDataValueChange({ value: event.target.value, type: "string" });
  }

  render() {
    let { datavalue, ...other } = this.props;
    let value = datavalue ? datavalue.value : "";
    return <input value={value} onChange={this.handleChange} {...other} />;
  }

};

StringDataValueEditor.propTypes = {
  onDataValueChange: PropTypes.func.isRequired,
  datavalue: PropTypes.object
};
