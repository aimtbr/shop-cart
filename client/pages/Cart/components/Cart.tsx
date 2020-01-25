import * as React from 'react';

import Item from './Item';
import { CartItems } from '../../../store/types';

import '../style/cart';


interface Props {
  items: CartItems;
  decItemCount: (e: React.MouseEvent, id: string) => void;
  incItemCount: (e: React.MouseEvent, id: string) => void;
  removeCartItem: (e: React.MouseEvent, id: string) => void;
}

const Cart = (props: Props): React.ReactElement => {
  const { items } = props;

  const fillCart = (items: CartItems): React.ReactElement[] => {
    return Object.values(items).map((item, index) => {
      const { decItemCount, incItemCount, removeCartItem } = props;

      return <Item key={index + 1} decItemCount={decItemCount}
        incItemCount={incItemCount} cartItem={item}
        removeCartItem={removeCartItem}
      />;
    })
  };

  return (
    <div className="cart">
      {fillCart(items)}
    </div>
  );
};

export default Cart;
