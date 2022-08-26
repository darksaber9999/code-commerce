import React from "react";
import { storeItemTitles } from "../initialState";

class StoreItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    const { storeItems } = info;

    return (
      <div className="store-items-container">
        {storeItemTitles.map((val) => {
          const { title, image, amountOfWork, price } = storeItems[val];

          return (
            <div className="store-item">
              <h3>{title}</h3>
              <img src={image} alt="code image" />
              <p>{amountOfWork}</p>
              <h4>{price}</h4>
              <button>Add to Cart</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default StoreItems;