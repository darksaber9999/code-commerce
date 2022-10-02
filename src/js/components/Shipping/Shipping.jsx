import React from "react";
import { displayNames } from "../constants";
import { INIT_SHIPPING_CARD } from "../initialState";

class Shipping extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.shipping)
    this.toggleDisplay(displayNames.cart)
  }

  goToPayment = () => {
    this.toggleDisplay(displayNames.shipping)
    this.toggleDisplay(displayNames.payment)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newShippingInfo = {
      addressTitle: e.target[0].value,
      name: e.target[1].value,
      addressLine1: e.target[2].value,
      addressLine2: e.target[3].value,
      city: e.target[4].value,
      state: e.target[5].value,
      country: e.target[6].value,
      zipCode: e.target[7].value,
      cellPhoneNumber: e.target[8].value,
      otherPhoneNumber: e.target[9].value,
      standardShipping: e.target[10].checked,
      expressShipping: e.target[11].checked,
    }

    this.props.addShippingInfo(newShippingInfo);

    e.target[0].value = INIT_SHIPPING_CARD.addressTitle;
    e.target[1].value = INIT_SHIPPING_CARD.name;
    e.target[2].value = INIT_SHIPPING_CARD.addressLine1;
    e.target[3].value = INIT_SHIPPING_CARD.addressLine2;
    e.target[4].value = INIT_SHIPPING_CARD.city;
    e.target[5].value = INIT_SHIPPING_CARD.state;
    e.target[6].value = INIT_SHIPPING_CARD.country;
    e.target[7].value = INIT_SHIPPING_CARD.zipCode;
    e.target[8].value = INIT_SHIPPING_CARD.cellPhoneNumber;
    e.target[9].value = INIT_SHIPPING_CARD.otherPhoneNumber;
    e.target[10].checked = INIT_SHIPPING_CARD.shipping;
    e.target[11].checked = INIT_SHIPPING_CARD.shipping;

    this.goToPayment();
  }

  render() {

    const tempStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    const inputData = [
      { key: 1, id: 'addressTitle', label: 'Address Title', name: 'addressTitle', type: 'text', error: 'emailError' },
      { key: 2, id: 'name', label: 'Name', name: 'name', type: 'text', error: 'passwordError' },
      { key: 3, id: 'addressLine1', label: 'Address Line 1', name: 'addressLine1', type: 'text', error: 'passwordError' },
      { key: 4, id: 'addressLine2', label: 'Address Line 2', name: 'addressLine2', type: 'text', error: 'passwordError' },
      { key: 5, id: 'city', label: 'City', name: 'city', type: 'text', error: 'passwordError' },
      { key: 6, id: 'state', label: 'State', name: 'state', type: 'text', error: 'passwordError' },
      { key: 7, id: 'country', label: 'Country', name: 'country', type: 'text', error: 'passwordError' },
      { key: 8, id: 'zipCode', label: 'Zip Code', name: 'zipCode', type: 'number', error: 'passwordError' },
      { key: 9, id: 'cellPhoneNumber', label: 'Cell Phone Number', name: 'cellPhoneNumber', type: 'tel', error: 'passwordError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },
      { key: 10, id: 'otherPhoneNumber', label: 'Other Phone Number', name: 'otherPhoneNumber', type: 'tel', error: 'passwordError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },
    ]

    const shippingData = [
      { key: 21, id: 'standardShipping', value: 'standard', name: 'shipping', type: 'radio', label: 'Standard Shipping' },
      { key: 22, id: 'expressShipping', value: 'express', name: 'shipping', type: 'radio', label: 'Express Shipping' },
    ]


    return (
      <div>
        <div>Shipping</div>
        <form style={tempStyle} onSubmit={this.handleSubmit}>
          {inputData.length ? inputData.map((item) => (
            <input
              key={item.key}
              id={item.id}
              autoComplete="off"
              placeholder={item.label}
              type={item.type}
              name={item.name}
              pattern={item.pattern ? item.pattern : null}
            />
          )) : null}
          <h4>Shipping Method</h4>
          {shippingData.length ? shippingData.map((item) => (
            <label
              key={item.key}
              htmlFor={item.id}
            >
              <input
                id={item.id}
                autoComplete="off"
                value={item.value}
                type={item.type}
                name={item.name}
              />
              {item.label}
            </label>
          )) : null}
          <button onClick={this.goToCart}>Back to Cart</button>
          <input type="submit" value="Payment" />
        </form>
      </div>
    )
  }
}

export default Shipping;