import { Action } from 'redux';

import { Item, CartItems } from '../../../store/types';


export const INCR_ITEM_COUNT = 'INCR_ITEM_COUNT';
export const DECR_ITEM_COUNT = 'DECR_ITEM_COUNT';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
// export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS';
export const REFRESH_CART_ITEMS = 'REFRESH_CART_ITEMS';
export const REFRESH_TOTAL_PRICE = 'REFRESH_TOTAL_PRICE';


interface CartItemCount extends Action {
  type: typeof INCR_ITEM_COUNT | typeof DECR_ITEM_COUNT;
  payload: {
    id: string;
  }
}

interface RemoveCartItem extends Action {
  type: typeof REMOVE_CART_ITEM;
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
  type: typeof REFRESH_CART_ITEMS;
  payload: {
    items: CartItems
  }
}

interface RefreshTotalPrice extends Action {
  type: typeof REFRESH_TOTAL_PRICE;
}

export type CartActions = CartItemCount |
  RemoveCartItem |
  RefreshCartItems |
  RefreshTotalPrice;

