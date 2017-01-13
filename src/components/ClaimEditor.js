import React, { Component, PropTypes } from "react";

import SnakValueEditor from "./SnakValueEditor";

export default class ClaimEditor extends Component {

  render() {
    let mainSnakKey = { ...this.props.claimKey, mainsnak: true };
    return <tr>
        <th>{this.props.label}</th>
        <td><SnakValueEditor snak={this.props.claim.mainsnak} snakKey={mainSnakKey}/></td>
      </tr>;
  }
}

ClaimEditor.propTypes = {
  claim: PropTypes.object.isRequired,
  claimKey: PropTypes.object.isRequired,
  label: PropTypes.node
};
