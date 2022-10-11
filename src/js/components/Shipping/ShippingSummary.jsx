import React from "react";
import s from "./ShippingSummary.module.css";

class ShippingSummary extends React.Component {
  render() {
    const { loggedInUser: { shippingInfo: { addressLine1, addressLine2, city, country, name, shipping, state, zipCode } }, shippingMethods } = this.props.info;

    return (
      <div className={s.shippingSummaryWindow}>
        <h5>Shipment Address:</h5>
        <p>{name}</p>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
        <p>{city}, {state} {zipCode} {country}</p>
        <h5>Shipment Method:</h5>
        <p>{shipping.charAt(0).toUpperCase() + shipping.slice(1)}</p>
        <p>{shippingMethods[shipping]}</p>
      </div>
    )
  }
}

export default ShippingSummary;