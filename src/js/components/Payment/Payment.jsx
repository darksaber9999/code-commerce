import React from "react";
import { CARD, CARDICON, displayNames, OTHERCARDS } from "../constants";
import { INIT_PAYMENT_CARD } from "../initialState";
import Summary from "../Summary/Summary";
import { cardNumberValidation, onlyTextValidation, securityCodeValidation } from "../validations";
import s from "./Payment.module.css";

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentData: INIT_PAYMENT_CARD,
      error: {},
      cardType: '',
    }
  }

  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.payment);
    this.toggleDisplay(displayNames.cart);
  }

  goToConfirm = () => {
    this.toggleDisplay(displayNames.payment);
    this.toggleDisplay(displayNames.confirm);
  }

  getGrandTotal = () => {
    return `$${this.props.getCartTotal() - this.props.getDiscount() + this.props.getShipping(this.props.info.loggedInUser.shippingInfo.shipping)}`;
  }

  handleValidations = (type, value) => {
    let errorText;
    switch (type) {
      case 'cardNumber':
        errorText = cardNumberValidation(value);
        this.setState((prevState) => ({
          cardType: this.props.findDebitCardType(value),
          error: {
            ...prevState.error,
            cardNumberError: errorText,
          },
        }));
        break;
      case 'cardholderName':
        errorText = onlyTextValidation(value);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            cardholderNameError: errorText,
          },
        }));
        break;
      case 'securityCode':
        errorText = securityCodeValidation(3, value);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            securityCodeError: errorText,
          },
        }));
        break;
      case 'expiryMonth':
      case 'expiryYear':
        errorText = undefined;
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
    if (name === 'cardNumber') {
      let mask = value.split(' ').join('');
      if (mask.length) {
        mask = mask.match(new RegExp('.{1,4}', 'g')).join(' ');
        this.setState((prevState) => ({
          paymentData: {
            ...prevState.paymentData,
            [name]: mask,
          },
        }));
      } else {
        this.setState((prevState) => ({
          paymentData: {
            ...prevState.paymentData,
            [name]: ''
          },
        }));
      }
    } else {
      this.setState((prevState) => ({
        paymentData: {
          ...prevState.paymentData,
          [name]: value
        },
      }));
    }
  }

  checkErrorBeforeSave = () => {
    const { paymentData } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(paymentData).forEach((val) => {
      if (!paymentData[val].length) {
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
      this.props.addPaymentInfo(this.state.paymentData);
      this.setState({
        paymentData: INIT_PAYMENT_CARD,
      });
      this.goToConfirm();
    }
  }

  render() {
    const { error } = this.state;
    const grandTotal = this.getGrandTotal();

    const inputData = [
      { key: 1, id: 'cardholderName', label: 'Cardholder Name', name: 'cardholderName', type: 'text', error: 'cardholderNameError' },
      { key: 2, id: 'cardNumber', label: 'Card Number', name: 'cardNumber', type: 'text', error: 'cardNumberError', maxLength: OTHERCARDS.length, isCard: true },
      { key: 3, id: 'securityCode', label: 'Security Code/CVV', name: 'securityCode', type: 'text', error: 'securityCodeError', maxLength: 4 },
    ];

    const option1 = ['Month', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const option2 = ['Year', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2010'];

    const selectData = [
      { key: 21, id: 'expiryMonth', name: 'expiryMonth', option: option1, error: 'expiryMonthError' },
      { key: 22, id: 'expiryYear', name: 'expiryYear', option: option2, error: 'expiryYearError' },
    ];

    return (
      <div className={s.paymentWindow}>
        <div>
          <div>Payment Information</div>
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
                  value={this.state.paymentData && this.state.paymentData[item.name]}
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
                {item.isCard && CARD.includes(this.state.cardType) &&
                  <img
                    className={s.cardImage}
                    src={CARDICON[this.state.cardType]}
                    alt="card"
                  />
                }
              </label>
            )) : null}
            <div>
              {selectData.length ? selectData.map((item) => (
                <label
                  key={item.key}
                  htmlFor={item.id}
                >
                  <select
                    id={item.id}
                    autoComplete="off"
                    name={item.name}
                    value={this.state.paymentData && this.state.paymentData[item.name]}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    {item.option.map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <span className="error-message">
                    {(error
                      && error[item.error]
                      && error[item.error].length > 1)
                      ? error[item.error]
                      : null}
                  </span>
                </label>
              )) : null}
            </div>
            <div className="btn">
              <button onClick={this.goToCart}>Back to Cart</button>
              <input type="submit" value={`Pay ${grandTotal}`} />
            </div>
          </form>
        </div>
        <Summary
          info={this.props.info}
          getCartTotal={this.props.getCartTotal}
          getShipping={this.props.getShipping}
          getDiscount={this.props.getDiscount}
        />
      </div>
    )
  }
}

export default Payment;