import React from "react";
import { displayNames } from "../constants";
import { INIT_PAYMENT_CARD } from "../initialState";
import Summary from "../Summary/Summary";
import s from "./Payment.module.css";

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentData: INIT_PAYMENT_CARD,
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
    return `$${this.props.getCartTotal() + this.props.getShipping(this.props.info.loggedInUser.shippingInfo.shipping)}`;
  }

  handleBlur = ({ target: { name, value } }) => {
    console.log(name, value);
  }

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPaymentInfo(this.state.paymentData);
    this.goToConfirm();
  }

  render() {
    const grandTotal = this.getGrandTotal();

    const tempStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    const inputData = [
      { key: 1, id: 'cardholderName', label: 'Cardholder Name', name: 'cardholderName', type: 'text', error: 'emailError' },
      { key: 2, id: 'cardNumber', label: 'Card Number', name: 'cardNumber', type: 'text', error: 'passwordError', maxLength: 19 },
      { key: 3, id: 'securityCode', label: 'Security Code/CVV', name: 'securityCode', type: 'text', error: 'passwordError', maxLength: 4 },
    ]


    return (
      <div className={s.paymentWindow}>
        <div>
          <div>Payment Information</div>
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
                  value={this.state.paymentData && this.state.paymentData[item.name]}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  maxLength={item.maxLength ? item.maxLength : null}
                />
              </label>
            )) : null}
            <div>
              <button onClick={this.goToCart}>Back to Cart</button>
              <input type="submit" value={`Pay ${grandTotal}`} />
            </div>
          </form>
        </div>
        <Summary
          info={this.props.info}
          getCartTotal={this.props.getCartTotal}
          getShipping={this.props.getShipping}
        />
      </div>
    )
  }
}

export default Payment;