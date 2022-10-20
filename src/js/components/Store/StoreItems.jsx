import React from "react";
import { storeItemTitles } from "../constants";
import s from "./StoreItems.module.css";

class StoreItems extends React.Component {

  addToCart = (e) => {
    this.props.info.isLoggedIn ?
      this.props.addToCart(e.target.dataset.item.toLowerCase()) :
      this.props.goToAuthWindow();
  }

  render() {
    const { info } = this.props;
    const { storeItems } = info;

    return (
      <div className={s.storeItemsContainer}>
        {storeItemTitles.map((val) => {
          const { key, title, image, amountOfWork, price } = storeItems[val];

          return (
            <div key={key} className={s.storeItem}>
              <div className={s.imageWrapper}>
                <img src={image} alt="computer code on a screen" />
              </div>
              <div className={s.infoWrapper}>
                <h3>{title}</h3>
                <p>{amountOfWork}</p>
                <h4>${price} ea.</h4>
                <button data-item={title} onClick={this.addToCart}>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default StoreItems;