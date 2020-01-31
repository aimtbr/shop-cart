import * as React from 'react';
import { Link } from 'react-router-dom';

import { ICart } from '../reducers/types';
import Item from './Item';

import '../style/cart';


interface Props extends ICart {
  decItemCount: (e: React.MouseEvent, id: string) => void;
  incItemCount: (e: React.MouseEvent, id: string) => void;
  removeCartItem: (e: React.MouseEvent, id: string) => void;
}

const Cart = (props: Props): React.ReactElement => {
  const {
    items,
    currency,
    decItemCount,
    incItemCount,
    removeCartItem,
    totalPrice,
  } = props;
  let itemsCount = Object.values(items).length || 0;

  const formattedTotalPrice = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency }).format(totalPrice);

  const fillCart = (): React.ReactElement[] => (
    Object.values(items).map((item, index) => {
      return <Item key={index + 1} decItemCount={decItemCount}
        incItemCount={incItemCount} cartItem={item}
        removeCartItem={removeCartItem}
      />;
    })
  );

  return (
    <div className="cart">
      <div className="cart-title">Cart</div>
      <div className="cart-items">{fillCart()}</div>
      <div className="cart-total">
        <span>Total</span>
        {formattedTotalPrice}
      </div>
      <div className="cart-buy-button-wrapper">
        <Link to="/shipping">
          <button className="cart-buy-button"
            disabled={itemsCount === 0}>BUY</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
