import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions.js";

import StringDataValueEditor from "./StringDataValueEditor.js";

class SnakValueEditor extends Component {

  constructor( props ) {
    super(props);
    this.actions = bindActionCreators( actions, this.props.dispatch );

    this.handleDataValueChange = this.handleDataValueChange.bind( this );
  }

  handleDataValueChange( value ) {
    this.actions.onSnakDataValueChange( this.props.snakKey, value);
  }

  render() {
    const datatype = this.props.snak.datatype;
    var dataValueEditor;

    switch (datatype) {
      case "commonsMedia":
      case "external-id":
      case "string":
        dataValueEditor = <StringDataValueEditor datavalue={this.props.snak.datavalue} onDataValueChange={this.handleDataValueChange}></StringDataValueEditor>;
    }

    if ( dataValueEditor )
      return <span className="wef-SnakValueEditor">{dataValueEditor}</span>;

    return <span className="wef-SnakValueEditor"/>;
  }
}

SnakValueEditor.propTypes = {
  snak: PropTypes.object.isRequired,
  snakKey: PropTypes.object.isRequired
};

export default connect()(SnakValueEditor);
