import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import ClaimEditor from "./ClaimEditor";

class PropertyEditor extends Component {

  render() {
    const { propertyRegistry, propertyKey, claims } = this.props;
    const description = propertyRegistry[propertyKey];

    if ( !claims ) {
      if ( description ) {
        return <tbody><ClaimEditor claim={description.claimTemplate} label={description.label} claimKey={{propertyKey: propertyKey, claimId: claim.id}} /></tbody>;
      } else {
        return <tbody><tr><td colSpan="2">Waiting for property definition to be loaded...</td></tr></tbody>;
      }
    }

    return <tbody>{claims.map( claim =>
      <ClaimEditor key={claim.id} claim={claim} label={description ? description.label : propertyKey} claimKey={{propertyKey: propertyKey, claimId: claim.id}} />
    )}</tbody>;
  }
}

PropertyEditor.propTypes = {
  propertyRegistry: PropTypes.object.isRequired,
  propertyKey: PropTypes.object.isRequired,
  claims: PropTypes.object
};

const selector = ( state, props ) => ( { claims: state.entity.claims ? state.entity.claims[props.propertyKey] : undefined, propertyRegistry: state.propertyRegistry } );
export default connect( selector )( PropertyEditor );
