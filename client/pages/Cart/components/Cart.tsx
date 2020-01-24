import * as React from 'react';

import Item from './Item';
import { Item as ItemType } from '../../../store/types';

import '../style/cart';


interface Props {
  items: {
    [index: string]: ItemType
  };
}

const fillCart = (items: { [index: string]: ItemType }): React.ReactElement[] => (
  Object.values(items).map((item, index) => <Item key={index + 1} {...item} />)
);

const Cart = (props: Props): React.ReactElement => {
  const { items } = props;

  return (
    <div className="cart">
      {fillCart(items)}
    </div>
  );
};

export default Cart;
