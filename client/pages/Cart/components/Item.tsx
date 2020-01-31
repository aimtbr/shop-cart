import * as React from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '../reducers/types';

import '../style/item';

interface Props {
  cartItem: CartItem;
  decItemCount: (e: React.MouseEvent, id: string) => void;
  incItemCount: (e: React.MouseEvent, id: string) => void;
  removeCartItem: (e: React.MouseEvent, id: string) => void;
}

const Item = (props: Props): React.ReactElement => {
  const { cartItem, incItemCount, decItemCount, removeCartItem } = props;
  const { count, item } = cartItem;
  const { id, title, image, description, price, currency } = item;

  const totalPrice = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency }).format(price * count);

  return (
    <div className="item">
      <div className="item-image-container">
        <div className="item-image-wrapper">
          <img className="item-image" src={image}/>
        </div>
      </div>
      <div className="item-content-wrapper">
        <Link to="/cart" className="item-title">
          {title}
        </Link>
        <p className="item-description">
          {description}
        </p>
      </div>
      <div className="item-buttons-wrapper">
        <button className="remove-item-button" type="button"
          onClick={e => removeCartItem(e, id)}>
          <img src="https://img.icons8.com/material/24/000000/trash--v1.png" />
        </button>
        <div className="item-count-wrapper">
          <button className="item-minus-button" type="button"
            onClick={(e) => decItemCount(e, id)}>-</button>
          <p className="item-count">
            {count}
          </p>
          <button className="item-plus-button" type="button"
            onClick={(e) => incItemCount(e, id)}>+</button>
        </div>
        <p className="item-total-price">
          {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Item;
