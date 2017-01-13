import React, { Component, PropTypes } from "react";

import PropertyEditor from "../components/PropertyEditor";

export default class PersonEditor extends Component {
  render() {
    return <table className="wef-PersonEditor">
      <PropertyEditor propertyKey="P742" />
      <PropertyEditor propertyKey="P856" />
      <PropertyEditor propertyKey="P18" />
      <PropertyEditor propertyKey="P1442" />
    </table>;
  }
}
