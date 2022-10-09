import React from "react";
import { displayNames } from "../constants";
import { INIT_SHIPPING_CARD } from "../initialState";
import Summary from "../Summary/Summary";
import s from "./Shipping.module.css";

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingData: INIT_SHIPPING_CARD,
    }
  }

  applyPhoneNumberMask = (number) => {
    if (number.length > 6) {
      return `${number.substr(0, 3)}-${number.substr(3, 3)}-${number.substr(6)}`;
    } else if (number.length > 3) {
      return `${number.substr(0, 3)}-${number.substr(3)}`;
    }
    return number;
  }

  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.shipping)
    this.toggleDisplay(displayNames.cart)
  }

  goToPayment = () => {
    this.toggleDisplay(displayNames.shipping)
    this.toggleDisplay(displayNames.payment)
  }

  handleBlur = ({ target: { name, value } }) => {
    console.log(name, value);
  }

  handleChange = ({ target: { name, value } }) => {
    if (name === 'cellPhoneNumber' || name === 'otherPhoneNumber') {
      let mask = value.split('-').join('');
      if (mask.length) {
        mask = this.applyPhoneNumberMask(mask);
        this.setState((prevState) => ({
          shippingData: {
            ...prevState.shippingData,
            [name]: mask,
          },
        }));
      } else {
        this.setState((prevState) => ({
          shippingData: {
            ...prevState.shippingData,
            [name]: ''
          },
        }));
      }
    } else {
      this.setState((prevState) => ({
        shippingData: {
          ...prevState.shippingData,
          [name]: value
        },
      }));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addShippingInfo(this.state.shippingData);
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
      { key: 9, id: 'cellPhoneNumber', label: 'Cell Phone Number', name: 'cellPhoneNumber', type: 'text', error: 'passwordError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', maxLength: 12 },
      { key: 10, id: 'otherPhoneNumber', label: 'Other Phone Number', name: 'otherPhoneNumber', type: 'text', error: 'passwordError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', maxLength: 12 },
    ]

    const shippingInputData = [
      { key: 21, id: 'standardShipping', value: 'standard', name: 'shipping', type: 'radio', label: 'Standard Shipping' },
      { key: 22, id: 'expressShipping', value: 'express', name: 'shipping', type: 'radio', label: 'Express Shipping' },
    ]


    return (
      <div className={s.shippingWindow}>
        <div>
          <div>Shipping Information</div>
          <form style={tempStyle} onSubmit={this.handleSubmit}>
            {inputData.length ? inputData.map((item) => (
              <label
                key={item.key}
                htmlFor={item.id}
              >
                <input
                  id={item.id}
                  autoComplete="off"
                  placeholder={item.label}
                  type={item.type}
                  name={item.name}
                  pattern={item.pattern ? item.pattern : null}
                  value={this.state.shippingData && this.state.shippingData[item.name]}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  maxLength={item.maxLength ? item.maxLength : null}
                />
              </label>
            )) : null}
            <div>Shipping Method</div>
            {shippingInputData.length ? shippingInputData.map((item) => (
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
                  onChange={this.handleChange}
                />
                {item.label}
              </label>
            )) : null}
            <div>
              <button onClick={this.goToCart}>Back to Cart</button>
              <input type="submit" value="Payment" />
            </div>
          </form>
        </div>
        <Summary
          info={this.props.info}
          shippingInfo={this.state.shippingData}
          getCartTotal={this.props.getCartTotal}
        />
      </div>
    )
  }
}

export default Shipping;