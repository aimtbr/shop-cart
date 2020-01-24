import * as React from 'react';
import { Item as ItemType } from '../../../store/types';

import '../style/item';

interface Props extends ItemType {

}

const Item = (props: Props): React.ReactElement => {
  const { title, image, description, count, price, currency } = props;
  console.log(currency);
  const totalPrice = new Intl.NumberFormat('UA', { style: 'currency', currency }).format(price * count);

  return (
    <div className="item">
      <div className="item-image-wrapper">
        <img className="item-image" src={image}/>
      </div>
      <div className="item-content-wrapper">
        <p className="item-title">
          {title}
        </p>
        <p className="item-description">
          {description}
        </p>
      </div>
      <div className="item-buttons-wrapper">
        <button className="remove-item-button" type="button">
          <img src="https://img.icons8.com/material/24/000000/trash--v1.png" />
        </button>
        <div className="item-count-wrapper">
          <button className="item-minus-button" type="button">-</button>
          <p className="item-count">
            {count}
          </p>
          <button className="item-plus-button" type="button">+</button>
        </div>
        <p className="item-total">
          {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Item;
