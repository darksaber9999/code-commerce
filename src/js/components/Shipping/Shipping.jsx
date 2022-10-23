import React from "react";
import Summary from "../Summary/Summary";
import s from "./Shipping.module.css";
import { displayNames } from "../constants";
import { INIT_SHIPPING_CARD } from "../initialState";
import { onlyNumbersValidation } from "../validations";

const { shipping, cart, payment } = displayNames;

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingData: INIT_SHIPPING_CARD,
      error: {},
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
    this.toggleDisplay(shipping)
    this.toggleDisplay(cart)
  }

  goToPayment = () => {
    this.toggleDisplay(shipping)
    this.toggleDisplay(payment)
  }

  handleValidations = (type, value) => {
    let errorText;
    switch (type) {
      case 'addressTitle':
      case 'name':
      case 'addressLine1':
      case 'addressLine2':
      case 'city':
      case 'state':
      case 'country':
        errorText = undefined;
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      case 'zipCode':
      case 'cellPhoneNumber':
      case 'otherPhoneNumber':
        errorText = onlyNumbersValidation(value.split('-').join(''));
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      default:
        break;
    }
  }

  handleBlur = ({ target: { name, value } }) => this.handleValidations(name, value);

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

  checkErrorBeforeSave = () => {
    const { shippingData } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(shippingData).forEach((val) => {
      if (!shippingData[val].length && val !== 'shipping') {
        errorValue = { ...errorValue, [`${val}Error`]: 'Required' };
        isError = true;
      }
    });
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        ...errorValue,
      }
    }));
    return isError;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave();

    if (!errorCheck && !Object.values(this.state.error).filter((val) => val !== undefined).length) {
      this.props.addShippingInfo(this.state.shippingData);
      this.setState({
        shippingData: INIT_SHIPPING_CARD,
      });
      this.goToPayment();
    }
  }

  render() {
    const { error, shippingData } = this.state;
    const { info, getCartTotal, getDiscount, getShipping } = this.props;
    const { shippingMethods: { standard, express } } = info;

    const inputData = [
      { key: 1, id: 'addressTitle', label: 'Address Title', name: 'addressTitle', type: 'text', error: 'addressTitleError' },
      { key: 2, id: 'name', label: 'Name', name: 'name', type: 'text', error: 'nameError' },
      { key: 3, id: 'addressLine1', label: 'Address Line 1', name: 'addressLine1', type: 'text', error: 'addressLine1Error' },
      { key: 4, id: 'addressLine2', label: 'Address Line 2', name: 'addressLine2', type: 'text', error: 'addressLine2Error' },
      { key: 5, id: 'city', label: 'City', name: 'city', type: 'text', error: 'cityError' },
      { key: 6, id: 'state', label: 'State', name: 'state', type: 'text', error: 'stateError' },
      { key: 7, id: 'country', label: 'Country', name: 'country', type: 'text', error: 'countryError' },
      { key: 8, id: 'zipCode', label: 'Zip Code', name: 'zipCode', type: 'text', error: 'zipCodeError', maxLength: 5 },
      { key: 9, id: 'cellPhoneNumber', label: 'Cell Phone Number', name: 'cellPhoneNumber', type: 'text', error: 'cellPhoneNumberError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', maxLength: 12 },
      { key: 10, id: 'otherPhoneNumber', label: 'Other Phone Number', name: 'otherPhoneNumber', type: 'text', error: 'otherPhoneNumberError', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', maxLength: 12 },
    ]

    const shippingInputData = [
      { key: 21, id: 'standardShipping', value: 'standard', name: 'shipping', type: 'radio', label: `Standard: ${standard}`, defaultChecked: true, },
      { key: 22, id: 'expressShipping', value: 'express', name: 'shipping', type: 'radio', label: `Express: ${express}`, defaultChecked: false, },
    ]


    return (
      <div className={s.shippingWindow}>
        <div>
          <h3>Shipping Information</h3>
          <form onSubmit={this.handleSubmit}>
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
                <div className="error-message">
                  {(error
                    && error[item.error]
                    && error[item.error].length > 1)
                    ? error[item.error]
                    : null}
                </div>
              </label>
            )) : null}
            <h3>Shipping Method</h3>
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
                  defaultChecked={item.defaultChecked}
                />
                {item.label}
              </label>
            )) : null}
            <div className="btn">
              <button onClick={this.goToCart}>Back to Cart</button>
              <input type="submit" value="Payment" />
            </div>
          </form>
        </div>
        <Summary
          info={info}
          shippingInfo={shippingData}
          getCartTotal={getCartTotal}
          getShipping={getShipping}
          getDiscount={getDiscount}
        />
      </div>
    )
  }
}

export default Shipping;