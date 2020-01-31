import { Action } from 'redux';
import { CartItems } from '../reducers/types';


export const cartTypes = {
  INCR_ITEM_COUNT: 'INCR_ITEM_COUNT',
  DECR_ITEM_COUNT: 'DECR_ITEM_COUNT',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  // REMOVE_CART_ITEMS: 'REMOVE_CART_ITEMS',
  REFRESH_CART_ITEMS: 'REFRESH_CART_ITEMS',
};

interface CartItemCount extends Action {
  type: string;
  payload: {
    id: string;
  }
}

interface RemoveCartItem extends Action {
  type: string;
  payload: {
    id: string;
  }
}

// interface RemoveCartItems extends Action {
//   type: typeof REMOVE_CART_ITEMS;
//   payload: {
//     ids: string[];
//   }
// }

interface RefreshCartItems extends Action {
  type: string;
  payload: {
    items: CartItems;
  }
}

export type CartActions = CartItemCount |
  RemoveCartItem |
  RefreshCartItems;
